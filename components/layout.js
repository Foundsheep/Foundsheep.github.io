import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";

export default function Layout() {
  return (
    <>
      <Head>
      <title>DJ Moon's web page</title>
      </Head>
      <Menu />
    </>
  )
}