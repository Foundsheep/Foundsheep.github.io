import { Skill, skillsDirectory } from "../icons/skill"
import { FaStar } from "react-icons/fa";
import { Subtitle } from "./subtitle";

const summaryWidth = 40
const summaryHeight = 40
const SkillCategory = (
  {stars, title, skills, width=summaryWidth, height=summaryHeight}: 
  {stars: number, title: string, skills: string[], width?: number, height?: number}
  ) => (
  <div className="flex-grow">
    <div className="flex flex-row">
      <div className="flex pt-1">
        {[...Array(stars)].map((_, i) => (
          <FaStar key={i} className="hover:text-yellow-800 transition-all duration-600" />
        ))}
      </div>
      <h3 className="ml-2">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skillKey: string) => (
        <Skill key={skillKey} {...skillsDirectory[skillKey]} width={width} height={height} />
      ))}
    </div>
  </div>
)

export function Summary() {
  const threeStars = ["python", "pytorch", "lightning", "docker", "fastapi"]
  const twoStars = ["java", "springboot", "django", "flask"]
  const oneStar = ["typescript", "nextjs", "tailwindcss"]

  return <>
    <Subtitle subtitle="Summary"/>
    <div className="flex flex-wrap gap-2">
      <SkillCategory stars={3} title="Professional, frequent" skills={threeStars} />
      <SkillCategory stars={2} title="Professional, occational" skills={twoStars} />
      <SkillCategory stars={1} title="Personal, interest" skills={oneStar} />
    </div>
  </>
}