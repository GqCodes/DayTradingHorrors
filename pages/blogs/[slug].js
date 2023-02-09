import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Skeleton from '../../Components/Skeleton';
import style from '../../styles/Slug.module.scss';
import Head from 'next/head';
import LayoutStatic from '../../Components/LayoutStatic';

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

  return (
    <LayoutStatic>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta httpEquiv='content-language' content='en' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='index, follow' name='robots' />
        <meta
          content='swing trading vs day trading, swing trading, day trading patterns, trading view, best indicators for day trading,indicators, day trading definition, day trading rules, tradingview, day trading for beginners, day trading books, day trading software, day trading websites, day trading strategies, day trading software, day trading stocks, day trading crypto, day trading simulator, day trading canada, day trading reddit, day trading courses, day trading for dummies, day trading robinhood, best day trading platform, is day trading worth it, how to start day trading, robinhood day trading, best day trading stocks, make $100 a day trading cryptocurrency, swing trading vs day trading, is day trading profitable, why do most traders lose money, day trading meme stocks, most day traders lose money, day trading research, is day trading dead, lost all money trading, the daily trader exposed, do professional traders lose money, day trading horror stories reddit, day trading tax horror stories, day trading for dummies review, stories of successful day traders, day trading success stories in india, how to be a successful day trader reddit, day trading after hours, day trading events, crypto coins, crypto trading, crypto currencies, crypto price, crypto login, crypto app, doj crypto, flare crypto, agix crypto, albt crypto, amp crypto price, canto crypto, tectonic crypto price, doj crypto announcement, coti crypto, why is crypto going up, ai crypto coins, apt crypto, rndr crypto, floki crypto, vra crypto, crypto arena capacity, what is a crypto mine, lcx crypto, aptos crypto, gala, gala crypto, bitboy crypto twitter, latest ftm crypto, gala crypto price, crypto news, crypto crash, crypto prices, cryptocurrency, crypto mining, crypto bubbles, crypto.com coin, crypto.com arena, crypto wallet, crypto fear and greed index, luna crypto, polygon crypto, solana crypto, best crypto to buy now, metaverse crypto, amp crypto, best crypto wallet, nft crypto, sandbox crypto, fantom crypto, day trading horrors, day trading horror, day trading horror stories, day trader horror, day trader horrors, day trader horror stories, day traders lose money, day trader loses money, day trading losing money, losing money day trading'
          name='keywords'
        />
        <meta
          content='Day Trading Horrors: Stories of Swing and Day traders who have lost a lot, some lost all of their money'
          name='description'
        />
        <meta
          content='Day Trading Horrors: Stories of Swing and Day traders who have lost a lot, some lost all of their money'
          property='og:description'
        />
        <meta content='website' property='og:type' />
        <meta content='Day Trading Horror Stories' property='og:title' />
        <title>Day Trading Horror Stories</title>
      </Head>

      <div className={style.banner}>
        <Image src={`https:${featuredImage.fields.file.url}`} width={1200} height={600} alt='feature' priority />
        <h2>{title}</h2>
      </div>

      <div className={style.body}>
        <div>{documentToReactComponents(body)}</div>
      </div>
    </LayoutStatic>
  );
};

export default Blog;
