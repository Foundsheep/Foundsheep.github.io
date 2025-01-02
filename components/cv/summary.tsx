import { Skill, skillsDirectory } from "../icons/skill"
import { FaStar } from "react-icons/fa";
import { Subtitle } from "./subtitle";

const summaryIconWidth = 40
const summaryIconHeight = 40
const SkillCategory = (
  {stars, title, skills, width=summaryIconWidth, height=summaryIconHeight}: 
  {stars: number, title: string, skills: string[], width?: number, height?: number}
  ) => (
  <div className="flex-grow bg-rose-200 rounded-md p-6 transition-all duration-75 hover:bg-rose-300 hover:shadow-md">
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <div className="flex pt-2">
          {[...Array(stars)].map((_, i) => (
            <FaStar key={i} className="hover:text-yellow-800 transition-all duration-600" />
          ))}
        </div>
        <p className="ml-2 font-semibold">{title}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skillKey: string) => (
        <Skill key={skillKey} {...skillsDirectory[skillKey]} width={width} height={height} />
      ))}
    </div>
  </div>
)

export function Summary() {
  const threeStars = ["python", "huggingface", "pytorch", "lightning", "docker", "fastapi", "flask"]
  const twoStars = ["java", "springboot", "django", "aws_ec2", "tensorflow", "matlab"]
  const oneStar = ["javascript", "typescript", "nextjs", "tailwindcss"]

  return <>
    <Subtitle subtitle="Summary"/>
    <div className="grid grid-cols-3 gap-4">
      <SkillCategory stars={3} title="Pro, ready to go" skills={threeStars} />
      <SkillCategory stars={2} title="Pro, familar" skills={twoStars} />
      <SkillCategory stars={1} title="Hobby, interested" skills={oneStar} />
    </div>
    <ul className="list-disc list-inside mt-10">
        <li>I love to work as a ML engineer, but I enjoy working on backend stuff as well</li>
        <li>The reason I love ML is because of its strong relationship with maths</li>
        <li>I'm eager to contribute to open-source projects, such as <a className="text-rose-400" href="https://huggingface.co/docs/diffusers/en/index">Huggingface Diffusers</a>, and have an experience of it in Hyundai Motors' project to adapt the diffusion model for its needs</li>
    </ul>

  </>
}