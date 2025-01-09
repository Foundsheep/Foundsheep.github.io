import ContactMe from "@/components/cv/contactme";
import { Experience } from "@/components/cv/experience";
import { Subtitle } from "@/components/cv/subtitle";
import { Summary } from "@/components/cv/summary";
import Link from "next/link";

export default function CV() {
    return <>
    <section className="w-full">
      <ContactMe />
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
            ["AI", "Conditional self-piercing rivet image generation using Diffusion model", "Hyundai Motors", ["OOM management using pytorch.org/memory_viz", "Huggingface model customisation", "Web UI using Django"]],
            ["AI", "Korean keywords extraction in Naver news using KeyBERT", "National Disaster Management Research Institute"],
            ["AI", "Proof of concepts (GNN, 3D volume prediction, Signal processing ...)"]
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
            ["Backend", "Android devices controling API", "ICR", ["Google's Android Management API used", "Java-written Android app maintenance", "Firebase Cloud Messaging used for push notification"]],
            ["Backend", "Mobile data extraction API in NDFaas(National Diginal Forensic System)", "Supreme Prosecutors' Office", ["The biggest project participated yet(with more than 50 people involved)"]],
            ["AI", "Job recommendation API maintenance in the national job matching service", "Korea Enployment Information Service", ["DeepFM model maintenance", "Data analysis to improve job matching metrics"]]
          ]
        }
        // skills={["java", "springboot"]}
      />

      {/* <Subtitle subtitle="Dev Bootcamp"></Subtitle> */}
      <Experience
        jobTitle="Dev bootcamp"
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
        company="ThePlantEat" 
        period="2020.01 ~ 2021.09" 
        content={[
            ["", "Data-driven vegan food manufacturer"],
            ["", "`Eat's Better` online shop management & SCM"]
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="Tasty9" 
        period="2018.08 ~ 2019.08" 
        content={[
          ["", "Korean ready-meal manufacturer"],
          ["", "Purchasing management & SCM"]
        ]
        }/>
      <Experience 
        jobTitle="" 
        company="EPPN" 
        period="2016.02 ~ 2016.08" 
        content={[
            ["", "Advertising Agency"],
            ["", "Employees' internal communication website(LiVE) management", "Samsung Electronics"]
          ]
        }/>

      <Subtitle subtitle="Education & Military Service"></Subtitle>
      <Experience 
        jobTitle="" 
        company="University of Westminster (London)" 
        period="2012.09 ~ 2015.09" 
        content={[
            ["", "BA Television Production"],
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="Bellerbys Colleage London" 
        period="2011.09 ~ 2012.09" 
        content={[
            ["", "Media Foundation (preparational course for universtiy)"]
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="R.O.K.A (Military service)"
        period="2009.08 ~ 2011.06" 
        content={[
          ]
        }/>
      <Experience 
        jobTitle="" 
        company="Suji High School (Yongin)" 
        period="2006.03 ~ 2009.03" 
        content={[
          ]
        }/>
    </section>
  </>
}