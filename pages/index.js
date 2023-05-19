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
          Please click the link below to explore.
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
      <h2 className={utilStyles.headingLg}>External Page</h2>
            <a className={styles.card}>
              <Link href='https://github.com/phurinat-udo'> 
                My Github Profile &rarr;
              </Link>
              <p>Discover my old project code</p>
            </a>

            <a className={styles.card}>
              <Link href='https://www.tiktok.com/t/ZSLerUgX3/?t=1'>
                Thank you for your attention. &rarr;
              </Link>
              <p>Let's see happy cat</p>
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
