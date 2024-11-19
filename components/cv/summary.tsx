import { Skill, skillsDirectory } from "../icons/skill"
import { FaStar } from "react-icons/fa";
import { Subtitle } from "./subtitle";

const summaryIconWidth = 40
const summaryIconHeight = 40
const SkillCategory = (
  {stars, title, skills, width=summaryIconWidth, height=summaryIconHeight}: 
  {stars: number, title: string, skills: string[], width?: number, height?: number}
  ) => (
  <div className="flex-grow">
    <div className="flex flex-row">
      <div className="flex pt-1">
        {[...Array(stars)].map((_, i) => (
          <FaStar key={i} className="hover:text-yellow-800 transition-all duration-600" />
        ))}
      </div>
      <p className="ml-2">{title}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skillKey: string) => (
        <Skill key={skillKey} {...skillsDirectory[skillKey]} width={width} height={height} />
      ))}
    </div>
  </div>
)

export function Summary() {
  const threeStars = ["python", "pytorch", "lightning", "docker", "fastapi", "flask"]
  const twoStars = ["java", "springboot", "django", "aws_ec2", "tensorflow"]
  const oneStar = ["typescript", "nextjs", "tailwindcss"]

  return <>
    <Subtitle subtitle="Summary"/>
    <div className="grid grid-cols-3 gap-2">
      <SkillCategory stars={3} title="Pro, ready to go" skills={threeStars} />
      <SkillCategory stars={2} title="Pro, familar" skills={twoStars} />
      <SkillCategory stars={1} title="Hobby, interested" skills={oneStar} />
    </div>
  </>
}