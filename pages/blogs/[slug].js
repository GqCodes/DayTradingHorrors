import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Skeleton from '../../Components/Skeleton';
import style from '../../styles/Slug.module.scss';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
}

const Blog = ({ blog }) => {
  if (!blog)
    return (
      <div>
        <Skeleton />
      </div>
    );

  const { featuredImage, title, body } = blog.fields;
  console.log(blog);

  return (
    <div>
      <div className={style.banner}>
        <Image src={`https:${featuredImage.fields.file.url}`} width={1200} height={600} alt='feature' />
        <h2>{title}</h2>
      </div>

      <div className={style.body}>
        <div>{documentToReactComponents(body)}</div>
      </div>
    </div>
  );
};

export default Blog;
