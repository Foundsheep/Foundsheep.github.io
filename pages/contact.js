import Link from "next/link";
import Menu from "../components/menu";

export default function CV() {
  return (
    <>
      <Menu></Menu>
      <div>
        <p>Email: moondeokjong@gmail.com</p>
        <p>github: <a href="https://www.github.com/Foundsheep">https://www.github.com/Foundsheep</a></p>
      </div>
      <Link href="/">Back to Home</Link>
    </>
  )
}