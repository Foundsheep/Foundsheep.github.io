import Link from "next/link";

export default function Menu() {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/cv"}>CV</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </>
  );
}