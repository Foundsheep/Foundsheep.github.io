import { Skill, SkillProps, skillsDirectory
  
 } from "../icons/skill";
type ExperienceProps = {
  jobTitle: string;
  company: string;
  period: string;
  content: string | string[];
  skills?: (keyof typeof skillsDirectory)[];
}

export function Experience({jobTitle, company, period, content, skills}: ExperienceProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside font-light my-4">
          {content.map((item, index) => (
            <li 
              className="" 
              key={index}>
                {item}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p className="font-light">{content}</p>
    }
  }
  return (
    <div className="flex flex-col md:flex-row mt-4">
      <div className="w-1/4 pt-1.5">
        <h4 className="font-light">{period}</h4>  
        <h4 className="text-md font-thin italic text-slate-400">@ {company}</h4>
      </div>
      <div className="w-3/4 pt-1 px-4 rounded-xl transition-all duration-75 hover:bg-inherit hover:shadow-md ">
        <h4 className="text-lg font-semibold text-slate-900">{jobTitle}</h4>
        {renderContent()}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills?.map((skillKey) => (
            <Skill key={skillKey} {...skillsDirectory[skillKey]} />
          ))}
        </div>
      </div>
    </div>
  );
}