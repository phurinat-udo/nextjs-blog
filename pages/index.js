import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';
import styles from '../styles/Home.module.css';


export default function Home( {allPostsData} ) {
  return (
    <Layout home className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Graduate Student in Innovative Physics, <br/> Faculty of Science, Mahidol University </p>
        <p>
          Please click the link below to exploe - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, date, title }) => (
            <a className={styles.card} key={id}>
              <Link href={`/posts/${id}`}>{title} &rarr;</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </a>
          ))}
            <a href='https://github.com/phurinat-udo' className={styles.card}>
              <h3> My Github Profile &rarr;</h3>
              <p>Discover my old project code</p>
            </a>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
