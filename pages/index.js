import { createClient } from 'contentful';
import BlogCard from '../Components/BlogCard';
import styles from '../styles/Index.module.scss';

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
    <div className={styles.blogList}>
      {blogs.map((blog) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </div>
  );
}
