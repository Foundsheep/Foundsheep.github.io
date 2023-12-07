import Link from "next/link";
import Image from 'next/image';

export default function CV() {
  return (
    <>
      <div>
        <Image
          src='/images/reward.png'
          height={200}
          width={300}
          alt='reward'
        />
      </div>
      <Link href="/">Back to Home</Link>
    </>
  )
}