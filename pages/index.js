import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>DJ Moon's web page</title>
      </Head>
      <Menu />
        <div>
          <p>
            Hi I'm DJ Moon
          </p>
        </div>
    </>
  )
}