import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/menu';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm DJ Moon</p>
      </section>
    </Layout>
  )
}