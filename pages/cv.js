import Link from "next/link";
import Image from 'next/image';
import Experience from "../components/experience";
import Menu from "../components/menu";

export default function CV() {
  return (
    <>
      <Menu />
      <div>
        <h2>이런 상 받아보신 적 있나요?</h2>
        <Image
          src='/images/reward.png'
          height={200}
          width={300}
          alt='reward'
        />
      </div>
      <h2>Work Experience</h2>
      <Experience 
        props={
          {
            date: "2022-07-04 ~ present", 
            title: "PublicAI",
            info: ["first line", "second line", "third line", "fourth line"]
          }
        }
      />
      <Experience 
        props={
          {
            date: "2022-07-04 ~ present", 
            title: "PublicAI",
            info: ["first line", "second line", "third line"]
          }
        }
      />
      {/* <Experience />
      <h2>Education</h2>
      <Experience />
      <Experience />
      <h2>Study-related</h2>
      <Experience />
      <Experience /> */}
    </>
  )
}