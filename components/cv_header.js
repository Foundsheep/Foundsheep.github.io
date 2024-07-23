import Image from "next/image";
import cvStyle from "../styles/cv.module.css"


export default function CVHeader() {
  return (
    <>
      <div>
        <h1 className="textCenter">What a reward!</h1>
        <Image 
          src="/images/reward.png"
          height={200}
          width={300}
          alt="reward"
          className={cvStyle.imageCenter}
        />
        <figcaption className="textCenter textSmall">Iconic rewards I got from AI Bootcamp for exceptional performences in continuous weeks</figcaption>
      </div>
      
    </>
  )
}