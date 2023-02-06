import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  const { title, slug, thumbnail } = blog.fields;

  return (
    <div className='card'>
      <div className='featured'>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          // width={thumbnail.fields.file.details.image.width}
          width={500}
          // height={thumbnail.fields.file.details.image.height}
          height={500}
          alt='feature image'
          priority
          className='featured__img'
        />
      </div>

      <div className='content'>
        <div className='info'>
          <h4>{title}</h4>
        </div>

        <div className='actions'>
          <Link href={`/blogs/${slug}`} legacyBehavior passHref>
            <a className='my-link'>Read More</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .card {
            transform: rotateZ(-1deg);
          }

          .content {
            background: #fff;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            margin: 0;
            position: relative;
            top: -40px;
            left: -10px;
          }
          .info {
            padding: 16px;
          }
          .info h4 {
            margin: 4px 0;
            text-transform: uppercase;
          }
          .actions {
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
          }
          .actions a {
            color: #fff;
            background: #f01b29;
            padding: 16px 24px;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}
