import { Experience } from "@/components/cv/experience";
import { Subtitle } from "@/components/cv/subtitle";
import { Summary } from "@/components/cv/summary";

export default function CV() {
    return <>
    <section className="w-full">
      {/* <p>
        Total duration I worked in 
        <span className="rounded-md bg-black text-slate-100 px-1 mx-1 mb-1">dev</span> field : 
        <span className="rounded-md bg-black text-red-300 px-1 mx-1">2 yrs 2 mths</span>
      </p>
      <p>
        Total duration I worked in 
        <span className="rounded-md bg-black text-slate-100 px-1 mx-1 mb-1">other</span> fields : 
        <span className="rounded-md bg-black text-red-300 px-1 mx-1">3 yrs 7 mths</span>
      </p> */}
      <p>
        I work mainly as a ML Engineer, but working at startups has given me many opportunities to learn Backend related skills, such as AWS, linux, docker, web frameworks etc.
      </p>
      <Summary />
    </section>
    <section>
      <Subtitle subtitle="Experience"></Subtitle>
      <Experience 
        jobTitle="ML Engineer" 
        company="CSI-Vision" 
        period="2024.03 ~ Present" 
        content={
          [
            "Hyundai Motors : SPR quality prediction in generated images using Diffusion model(DDPM)",
            "National Disaster Management Research Institute : Korean keywords extraction from Naver news using KeyBERT",
            "POCs"
          ]
        }
        // skills={["python", "pytorch", "lightning", "torchserve", "django", "huggingface"]}
      />
      <Experience 
        jobTitle="ML/Backend Engineer" 
        company="PublicAI" 
        period="2022.07 ~ 2024.03" 
        content={
          [
            "ICR - MDM(Mobile Device Management) solution for Android devices",
            "Supreme Prosecutors' Office - NDFaas(National Diginal Forensic) mobile information extraction",
            "Korea Enployment Information Service - Job recommendation system in WorkNet maintenance"
          ]
        }
        // skills={["java", "springboot"]}
      />

      <Subtitle subtitle="Dev Bootcamp"></Subtitle>
      <Experience
        jobTitle="K-Digital Training : AIFFEL AI school"
        company="Modu LAB"
        period="2021.12 ~ 2022.06"
        content={
          [
            "Basic data analysis & visualisation",
            "Basic ML & DL with Stanford's CS231n lectures",
            "Advanced DL in Computer Vision",
          ]
        }
      />

      <Subtitle subtitle="Experience(non-dev)"></Subtitle>
      <Experience 
        jobTitle="SCM Manager/Online shopping manager" 
        company="ThePlantEat" 
        period="2020.01 ~ 2021.09" 
        content={["Eat's Better : Brand's online shop management & SCM"]}/>
      <Experience 
        jobTitle="SCM Manager/Purchasing manager" 
        company="Tasty9" 
        period="2018.08 ~ 2019.08" 
        content={["Purchase & SCM"]}/>
      <Experience 
        jobTitle="Advertising Agency AE" 
        company="EPPN" 
        period="2016.02 ~ 2016.08" 
        content={["Samsung Electronics : Employees' internal communication website(LiVE) management"]}/>

      <Subtitle subtitle="Education & Military Service"></Subtitle>
      <Experience 
        jobTitle="BA Television Production" 
        company="University of Westminster" 
        period="2012.09 ~ 2015.06" 
        content={
          [
            "Drama production",
            "Media & Communication",
            "Creativity"
          ]
        }/>
      <Experience 
        jobTitle="Media Foundation" 
        company="Bellerbys Colleage London" 
        period="2011.09 ~ 2012.08" 
        content={["English Language Preparation Programme also included"]}/>
      <Experience 
        jobTitle="Military service" 
        company="R.O.K.A" 
        period="2009.08 ~ 2011.06" 
        content={[]}/>
      <Experience 
        jobTitle="High school education" 
        company="Suji High School(Yongin)" 
        period="2006.03 ~ 2009.02" 
        content={[]}/>
    </section>
  </>
}