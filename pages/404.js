import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import style from '../styles/404.module.scss';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.notFound}>
      <h1 className={style.h1}>404</h1>
      <h2>Ooops! That page cannot be found :(</h2>
      <p>
        Redirecting to the <Link href='/'>Homepage</Link> for more Horror Stories
      </p>
    </div>
  );
}
