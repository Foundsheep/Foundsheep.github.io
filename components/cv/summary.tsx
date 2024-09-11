import { Skill, skillsDirectory } from "../icons/skill"
import { FaStar } from "react-icons/fa";
import { Subtitle } from "./subtitle";

const summaryWidth = 40
const summaryHeight = 40
const SkillCategory = ({stars, title, skills, width=summaryWidth, height=summaryHeight}) => (
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
    <p>Let's see what kind of paths DJ has taken... :)</p>
    <Subtitle subtitle="Summary"/>
    <div className="flex flex-wrap gap-4">
      <SkillCategory stars={3} title="Professionally, frequently" skills={threeStars} />
      <SkillCategory stars={2} title="Professionally, Occationally" skills={twoStars} />
      <SkillCategory stars={1} title="Personally developed" skills={oneStar} />
    </div>
  </>
}