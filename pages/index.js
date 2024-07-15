import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>DJ Moon</title>
      </Head>
      <Menu />
        <div>
          <p>
            Hi I'm DJ Moon
          </p>
          <p>
            I belive in the philsophy described down below
            <ul>
              <li>Better engineers are made with small habits</li>
                <ul>
                  <li>Search for and understand the depth of concepts newly encountered</li>
                </ul>
              <li>Take responsibilities not only for me, but also for the whole society</li>
            </ul>
          </p>
        </div>
    </>
  )
}