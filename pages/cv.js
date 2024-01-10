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
      <h2>Work Experience</h2>
      <Experience 
        props={
          {
            date: "2022-07 ~ present", 
            title: "PublicAI",
            info: ["MDM Project", "NDFaas", "한고원"]
          }
        }
      />
      <Experience 
        props={
          {
            date: "2020-01 ~ 2021-10 ", 
            title: "더플랜잇",
            info: ["first line", "second line", "third line"]
          }
        }
      />
    </>
  )
}