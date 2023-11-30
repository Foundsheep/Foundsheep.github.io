import Head from 'next/head';
import Link from 'next/link';

export default function Cv() {
  return (
    <>
      <Head>
        <title>CV</title>
      </Head>
      <h1>CV</h1>
      <h3>
        <Link href={"/"}>Back to Home</Link>
      </h3>
    </>
  );
}