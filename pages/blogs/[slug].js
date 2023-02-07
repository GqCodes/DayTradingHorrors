import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

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
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
}

const Blog = ({ blog }) => {
  const { featuredImage, title, body } = blog.fields;
  console.log(blog);

  return (
    <div>
      <div className='banner'>
        <Image src={`https:${featuredImage.fields.file.url}`} width={1200} height={600} alt='feature' />
        <h2>{title}</h2>
      </div>

      <div className='body'>
        <div>{documentToReactComponents(body)}</div>
      </div>

      <style jsx>
        {`
          h2,
          h3 {
            text-transform: uppercase;
          }
          .banner h2 {
            margin: 0;
            background: #fff;
            display: inline-block;
            padding: 20px;
            position: relative;
            top: -60px;
            left: -10px;
            transform: rotateZ(-1deg);
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Blog;
