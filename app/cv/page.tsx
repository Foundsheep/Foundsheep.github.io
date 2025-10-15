import ContactMe from "@/components/cv/contactme";
import { Experience } from "@/components/cv/experience";
import { Subtitle } from "@/components/cv/subtitle";
import { SummaryIcons } from "@/components/cv/summary";
import { IntroText } from "@/components/cv/introText";
import Link from "next/link";

export default function CV() {
    return <>
    <section className="w-full">
      <ContactMe />
      <IntroText />
      {/* <SummaryIcons /> */}
    </section>
    <section>
      <Subtitle subtitle="Experience"></Subtitle>
      <Experience 
        jobTitle="ML Engineer" 
        company="CSI-Vision" 
        period="2024.03 ~ Present" 
        content={
          [
            ["AI", "Image Gen AI - conditional self-piercing rivet image generation using Diffusion model", "Hyundai Motors", ["OOM management using pytorch.org/memory_viz", "Huggingface model customisation", "CFG implementation", "Web UI using Django"]],
            ["AI", "Semantic Segmentation - self-piercing rivet images", "Hyundai Motors", ["Data annotation using Cvat", "Improve performance on different themed-datasets through data augmentation"]],
            ["AI", "Regression - predicting nugget size from steel spot welding data", "Hyundai Motors", ["Data analysis & feature engineering", "Improve performance(R^2) from about 0.76 to 0.92 by collaboration with domain experts"]],
            ["AI", "Binary Claissfication - predicting spatter from steel spot welding data", "Hyundai Motors", ["Improve performance(F1-score) from 0.65 to 0.80 by collaboration with domain experts"]],
            ["AI", "Korean keywords extraction model - extraction from Naver News website using KeyBERT", "National Disaster Management Research Institute", ["API server development"]],
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
            ["Backend", "MDM - Android devices controling API development", "ICR", ["AWS EC2, Gateway, etc. setup", "Google Android Management API based implementation", "Java-based Android app maintenance", "Firebase Cloud Messaging set up for push notification"]],
            ["Backend", "NDFaas(National Diginal Forensic System) - Mobile data extraction API development", "Supreme Prosecutors' Office", ["The biggest project participated yet(with more than 50 people involved)"]],
            ["AI", "Recommender system - Job recommendation API maintenance in national recruitment service", "Korea Enployment Information Service", ["DeepFM model maintenance", "Data analysis to improve job matching metrics"]]
          ]
        }
        // skills={["java", "springboot"]}
      />

      {/* <Subtitle subtitle="Dev Bootcamp"></Subtitle> */}
      <Experience
        jobTitle="National Funded AI Training Course"
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
        jobTitle="SCM & E-commerce operator" 
        company="ThePlantEat" 
        period="2020.01 ~ 2021.09" 
        content={[
            ["", "Data-driven vegan food manufacturer"],
            ["", "SCM & `Eat's Better` online shop management"]
          ]
        }/>
      <Experience 
        jobTitle="SCM & Purchasing" 
        company="Tasty9" 
        period="2018.08 ~ 2019.08" 
        content={[
          ["", "Korean ready-meal products manufacturer"],
          ["", "SCM & Purchasing management"]
        ]
        }/>
      <Experience 
        jobTitle="Jr. Account Executive" 
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
        company="University of St Andrews (UK)"
        period="2025.03 ~ Present"
        content={[
          ["", "MSc Data Science"]
        ]}/>
      <Experience 
        jobTitle="" 
        company="University of Westminster (UK)" 
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
      {/* <Experience 
        jobTitle="" 
        company="Suji High School (Yongin)" 
        period="2006.03 ~ 2009.03" 
        content={[
          ]
        }/> */}
    </section>
  </>
}