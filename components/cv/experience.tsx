import { Skill, SkillProps, skillsDirectory } from "../icons/skill";
import Sticker, { CompanySticker } from "../icons/sticker";

type ExperienceProps = {
  jobTitle: string;
  company: string;
  period: string;
  content: string | string[][];
  skills?: (keyof typeof skillsDirectory)[];
}

function parsePeriod(date: string) {
  let [dateFrom, dateUntil] = date.split("~").map(x => x.trim());
  let [yearFrom, monthFrom] = dateFrom.split(".").map(Number);
  let yearUntil: number, monthUntil: number;
  if (dateUntil.toLowerCase() == "present") {
    yearUntil = new Date().getFullYear();
    monthUntil = new Date().getMonth() + 1;
  } else {
    [yearUntil, monthUntil] = dateUntil.split(".").map(Number);
  }
  // let [yearUntil, monthUntil] = dateUntil.split(".").map(Number);
  const yearUnnecessary = 2010;

  // reduce number for calculation
  const totalMonthUntil = (yearUntil - yearUnnecessary) * 12 + monthUntil;
  const totalMonthFrom = (yearFrom - yearUnnecessary) * 12 + monthFrom;
  const totalMonthDiff = totalMonthUntil - totalMonthFrom;

  const yearDiff = Math.trunc(totalMonthDiff / 12);
  const monthDiff = totalMonthDiff % 12;

  return [yearDiff, monthDiff];
}

function wrapDuration(period: string) {
  const [yearDiff, monthDiff] = parsePeriod(period);
  // let [yearDiff, monthDiff] = parsePeriod(period).map(String);
  // yearDiff = String(yearDiff).padStart(1, "0");
  // monthDiff = String(monthDiff).padStart(2, "0");
  return (
    <div><span className="bg-slate-200 px-1 rounded-md text-slate-500">{yearDiff}y {monthDiff != 0 ? `${monthDiff}m` : ""}</span></div>
  )
}

export function Experience({jobTitle, company, period, content, skills}: ExperienceProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-none list-inside font-light">
          {content.map((item, index) => (
            <li 
              className="" 
              key={index}>
                {item[0] !== "" &&  Sticker(item[0])}
                {item[0] !== "" && "\u00A0\u00A0"}
                {item[1]}
                {item[2] !== "" && item[2] != null && CompanySticker(item[2])}
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
        <div className="text-xl text-slate-500">{period}</div>
        {wrapDuration(period)}
        {company && (
          <div className="text-xl font-semibold italic text-slate-500">@ {company}</div>
        )}
        <div className="text-lg font-thin text-slate-500">{jobTitle}</div>
      </div>
      <div className="w-3/4 pt-1 px-4 rounded-xl transition-all duration-75 hover:bg-inherit hover:shadow-md ">
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