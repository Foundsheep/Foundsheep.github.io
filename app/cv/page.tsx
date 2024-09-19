import { Experience } from "@/components/cv/experience";
import { Subtitle } from "@/components/cv/subtitle";
import { Summary } from "@/components/cv/summary";

export default function CV() {
    return <>
    <section className="w-full">
      <p>
        Total duration I worked in 
        <span className="rounded-md bg-black text-slate-100 px-1 mx-1 mb-1">dev</span> field : 
        <span className="rounded-md bg-black text-red-300 px-1 mx-1">2 yrs 2 mths</span>
      </p>
      <p>
        Total duration I worked in 
        <span className="rounded-md bg-black text-slate-100 px-1 mx-1 mb-1">other</span> fields : 
        <span className="rounded-md bg-black text-red-300 px-1 mx-1">3 yrs 7 mths</span>
      </p>
      <Summary />
    </section>
    <section>
      <Subtitle subtitle="Experience"></Subtitle>
      <Experience 
        jobTitle="ML Engineer / AI team leader" 
        company="CSI-Vision" 
        period="2024.03 ~ Present" 
        content={
          [
            "Hyundai Motors - Customised Diffusion을 활용한 SPR 단면 예측",
          ]
        }
        skills={["python", "pytorch", "lightning", "torchserve", "django", "huggingface"]}
      />
      <Experience 
        jobTitle="ML/Backend Engineer" 
        company="PublicAI" 
        period="2022.07 ~ 2024.03" 
        content={
          [
            "Mobile Device Management(MDM) - 안드로이드 MDM 서버 구축",
            "대검찰청 - 빅데이터 기반 디지털 포렌식 솔루션 구축(모바일 파트 담당)",
            "한국고용정보원 - 워크넷 일자리 추천시스템 유지보수"
          ]
        }
        skills={["java", "springboot"]}
      />

      <Subtitle subtitle="Experience(non-dev)"></Subtitle>
      <Experience 
        jobTitle="SCM Manager/Online shopping manager" 
        company="ThePlantEat" 
        period="2020.01 ~ 2021.09" 
        content={["잇츠베러 - 온라인 쇼핑몰 운영 및 SCM 관리"]}/>
      <Experience 
        jobTitle="SCM Manager/Purchasing manager" 
        company="Tasty9" 
        period="2018.08 ~ 2019.08" 
        content={["테이스티나인 - 자재 구매 및 물류 유통 관리"]}/>
      <Experience 
        jobTitle="Advertising Agency AE" 
        company="EPPN" 
        period="2016.02 ~ 2016.08" 
        content={["삼성전자 - 사내 커뮤니케이션 홈페이지(LiVE) 기획 및 운영"]}/>

      <Subtitle subtitle="Education"></Subtitle>
      <Experience 
        jobTitle="BA Television Production" 
        company="University of Westminster" 
        period="2012.09 ~ 2015.06" 
        content={""}/>
      <Experience 
        jobTitle="Media Foundation" 
        company="Bellerbys Colleage London" 
        period="2011.09 ~ 2012.08" 
        content={["English Language Preparation Programme also included"]}/>
    </section>
  </>
}