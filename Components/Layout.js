import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <h1>
            <span>Day Trading</span>
            <span>Horror Stories</span>
          </h1>
          <h2>The Horrors Await...</h2>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2023 Day Trading Horrors</p>
      </footer>
    </div>
  );
}
