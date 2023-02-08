import Image from 'next/image';
import Link from 'next/link';
import style from './BlogCard.module.scss';

export default function BlogCard({ blog }) {
  const { title, slug, thumbnail } = blog.fields;

  return (
    <div className={style.card}>
      <div className={style.featured}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          // width={thumbnail.fields.file.details.image.width}
          width={500}
          // height={thumbnail.fields.file.details.image.height}
          height={500}
          alt='feature image'
          priority
          className={style.featured__img}
        />
      </div>

      <div className={style.content}>
        <div className={style.info}>
          <h4>{title}</h4>
        </div>

        <div className={style.actions}>
          <Link href={`/blogs/${slug}`} legacyBehavior passHref>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
