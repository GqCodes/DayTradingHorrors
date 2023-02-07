import { createClient } from 'contentful';
import BlogCard from '../Components/BlogCard';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({ content_type: 'blog' });
  return {
    props: {
      blogs: response.items,
    },
    revalidate: 1,
  };
}

export default function Blogs({ blogs }) {
  return (
    <div className='blog-list'>
      {blogs.map((blog) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}

      <style jsx>
        {`
          .blog-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}
      </style>
    </div>
  );
}
