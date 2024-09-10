import { Skill, skillsDirectory } from "../icons/skill"
import { FaStar } from "react-icons/fa";
import { Subtitle } from "./subtitle";

export function Summary() {
  const summaryWidth = 40
  const summaryHeight = 40
  const threeStars = ["python", "pytorch", "lightning", "docker"]
  const twoStars = ["java", "springboot", "django", "fastapi"]
  const oneStar = ["typescript", "nextjs", "tailwindcss"]
  return <>
    <p>Let's see what kind of paths DJ has taken... :)</p>
    <Subtitle subtitle="Summary"/>
    <div className="flex flex-row gap-4">
      <div>
        <div className="flex flex-row">
          <FaStar />
          <FaStar />
          <FaStar />
          <h1>Professionally, frequently used</h1>
        </div>
        <div className="flex space-x-2">
          {threeStars.map((skillKey) => (
            <Skill key={skillKey} {...skillsDirectory[skillKey]} width={summaryWidth} height={summaryHeight}/>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <FaStar />
          <FaStar />
          <h1>Professionally, occasionally used</h1>
        </div>
        <div className="flex space-x-2">
          {twoStars.map((skillKey) => (
            <Skill key={skillKey} {...skillsDirectory[skillKey]} width={summaryWidth} height={summaryHeight}/>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <FaStar />
          <h1>Personally, learned</h1>
        </div>
        <div className="flex space-x-2">
          {oneStar.map((skillKey) => (
            <Skill key={skillKey} {...skillsDirectory[skillKey]} width={summaryWidth} height={summaryHeight}/>
          ))}
        </div>
      </div>
    </div>
  </>
}