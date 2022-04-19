import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <p>
          I'm learning webdevelopment with the goal to be a fullstack
          webdeveloper one day.
        </p>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>HTML</li>
          <li className={utilStyles.listItem}>CSS</li>
          <li className={utilStyles.listItem}>JavaScript</li>
          <li className={utilStyles.listItem}>React</li>
          <li className={utilStyles.listItem}>NextJS</li>
          <li className={utilStyles.listItem}>Node / Express</li>
          <li className={utilStyles.listItem}>MongoDB / Mongoose</li>
        </ul>
        <p>--</p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
