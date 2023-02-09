import Link from 'next/link';
import style from './LayoutStatic.module.scss';
import { RiPinterestLine } from 'react-icons/ri';
import { RiTwitterLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';

export default function LayoutStatic({ children }) {
  return (
    <div className={style.layoutStatic}>
      <header className={style.header}>
        <Link href='/'>
          <h1>
            <span>Day Trading</span>
            <span>Horror Stories</span>
          </h1>
          <h2>The Horrors Await...</h2>
        </Link>
      </header>

      <div className={style.pageContent}>{children}</div>

      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.title}>Day Trading Horrors</div>
          <div>
            <p>Copyright 2023</p>
          </div>
          <div className={style.socials}>
            <Link href={'https://www.instagram.com/daytradinghorrors/'} target='_blank'>
              <RiInstagramLine />
            </Link>

            <Link href={'https://twitter.com/DtHorrors'} target='_blank'>
              <RiTwitterLine />
            </Link>

            <Link href={'https://www.pinterest.com/daytradinghorrors/'} target='_blank'>
              <RiPinterestLine />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
