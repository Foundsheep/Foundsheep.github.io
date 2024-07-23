import Link from "next/link";
import Image from 'next/image';
import Experience from "../components/experience";
import Menu from "../components/menu";
import cvStyle from '../styles/cv.module.css';
import CVHeader from "../components/cv_header";

export default function CV() {
  return (
    <>
      <Menu></Menu>
      <CVHeader></CVHeader>
      <div>
        <hr></hr>
        <h1 className={cvStyle.textCenter}>Work Experience</h1>
        <h2>Devlopment related</h2>
        <Experience 
          props={
            {
              date: "2024-03 ~ present",
              title: "씨에스아이비젼",
              info: ["first line", "second line", "third line"]
            }
          }
        />
        <Experience 
          props={
            {
              date: "2022-07 ~ 2024-03", 
              title: "PublicAI",
              projects: [
                {
                  projectTitle:"MDM Project",
                  actions: [
                    "국내 학교에 보급 예정인 Mobile Device Management 솔루션 구축 내 백엔드 및 보조 PL 담당",
                    "Android Management API, Firebase Cloud Messaging, Flask를 활용한 안드로이드 MDM 파트 백엔드 구축",
                    "Django, Django-Rest-Framework를 활용한 웹 콘솔 백엔드 구축",
                    "API 설계",
                    "C# 기반 윈도우 MDM 기능 검증",
                    "React 기반 프론트엔드 개발자와 협업을 위한 토이 프로젝트 진행(개인)",
                    "C#, AWS, Docker, Python, Flask, Django, Django-Rest-Framework, Postgresql, Nginx, FCM"
                  ]
                },
                {
                  projectTitle:"NDFaas",
                  actions: [
                    "기사 : https://www.lawtimes.co.kr/news/193126",
                    "범죄자의 모바일에서 추출된 Sqlite DB 기록을 수사에 사용되는 통합된 DB에 적재",
                    "대규모 SI 프로젝트를 참여를 통해 솔루션 구축의 다방면을 경험",
                    "단기간 내 새로운 기술 습득 및 구현 경험",
                    "Java, Spring, Python, Vertica DB, Sqlalchemy"
                  ]
                }
              ]
            }
          }
        />
        <hr></hr>
        <h2>Others</h2>
        <Experience 
          props={
            {
              date: "2020-01 ~ 2021-10 ", 
              title: "더플랜잇",
              info: ["first line", "second line", "third line"]
            }
          }
        />
        <Experience 
          props={
            {
              date: "2018-08 ~ 2019-08 ", 
              title: "테이스티나인",
              info: ["first line", "second line", "third line"]
            }
          }
        />
      </div>
      <div>
        <h1 className={cvStyle.textCenter}>Education</h1>
        <Experience 
          props={
            {
              date: "2012-09 ~ 2015-06 ", 
              title: "University of Westminster",
              info: ["first line", "second line", "third line"]
            }
          }
        />
        <Experience 
          props={
            {
              date: "2006-03 ~ 2009-02 ", 
              title: "수지고등학교",
              info: ["first line", "second line", "third line"]
            }
          }
        />
      </div>
    </>
  )
}