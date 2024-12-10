import ContactMe from "@/components/cv/contactme";
import { Experience } from "@/components/cv/experience";
import { Subtitle } from "@/components/cv/subtitle";
import { Summary } from "@/components/cv/summary";
import Link from "next/link";

export default function CV() {
    return <>
    <section className="w-full">
      <Summary />
      <ContactMe />
    </section>
    <section>
      <Subtitle subtitle="Experience"></Subtitle>
      <Experience 
        jobTitle="ML Engineer" 
        company="CSI-Vision" 
        period="2024.03 ~ Present" 
        content={
          [
            ["AI", "Conditional self-piercing rivet image generation using Diffusion model", "Hyundai Motors"],
            ["AI", "Korean keywords extraction in Naver news using KeyBERT", "National Disaster Management Research Institute"],
            ["AI", "Proof of concepts (3D volume prediction, signature verification ...)"]
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
            ["Backend", "Android devices controling API using Google's Android Management API", "ICR"],
            ["Backend", "Mobile data extraction API in NDFaas(National Diginal Forensic System)", "Supreme Prosecutors' Office"],
            ["AI", "Job recommendation API maintenance in the national job matching service", "Korea Enployment Information Service"]
          ]
        }
        // skills={["java", "springboot"]}
      />

      <Subtitle subtitle="Dev Bootcamp"></Subtitle>
      <Experience
        jobTitle=""
        company="AIFFEL AI school"
        period="2021.12 ~ 2022.06"
        content={
          [
            ["", "K-Digital Training"],
            ["", "Basic data analysis & visualisation"],
            ["", "Basic ML & DL with Stanford's CS231n lectures"],
            ["", "Advanced DL track for Computer Vision"],
          ]
        }
      />

      <Subtitle subtitle="Experience(non-dev)"></Subtitle>
      <Experience 
        jobTitle="" 
        company="" 
        period="2020.01 ~ 2021.09" 
        content={[
            ["", "@ ThePlantEat (AI-based vegan food manufacturer)"],
            ["", "'Eat's Better' brand's online shop management & SCM"]
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="" 
        period="2018.08 ~ 2019.08" 
        content={[
          ["", "@ Tasty9 (Korean ready-meal manufacturer)"],
          ["", "Purchasing management & SCM"]
        ]
        }/>
      <Experience 
        jobTitle="" 
        company="" 
        period="2016.02 ~ 2016.08" 
        content={[
            ["", "@ EPPN (Advertising Agency)"],
            ["", "Employees' internal communication website(LiVE) management", "Samsung Electronics"]
          ]
        }/>

      <Subtitle subtitle="Education & Military Service"></Subtitle>
      <Experience 
        jobTitle="" 
        company="" 
        period="2012.09 ~ 2015.09" 
        content={[
            ["", "@ University of Westminster (London)"],
            ["", "BA Television Production"],
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="" 
        period="2011.09 ~ 2012.09" 
        content={[
            ["", "@ Bellerbys Colleage London"],
            ["", "Media Foundation (preparational course for universtiy)"]
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="" 
        period="2009.08 ~ 2011.06" 
        content={[
            ["", "@ R.O.K.A"],
            ["", "military service"]
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="" 
        period="2006.03 ~ 2009.03" 
        content={[
            ["", "@ Suji High School (Yongin)"],
          ]
        }/>
    </section>
  </>
}