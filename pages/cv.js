import Link from "next/link";
import Image from 'next/image';
import Experience from "../components/experience";

export default function CV() {
  return (
    <>
      <div>
        <h1>이런 상 받아보신 적 있나요?</h1>
        <Image
          src='/images/reward.png'
          height={200}
          width={300}
          alt='reward'
        />
      </div>
      <Experience />
      <Experience />
      <Experience />
      <Link href="/">Back to Home</Link>
    </>
  )
}