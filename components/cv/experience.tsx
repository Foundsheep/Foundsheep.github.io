type ExperienceProps = {
  jobTitle: string;
  company: string;
  period: string;
  content: string | string[];
}

export function Experience(props: ExperienceProps) {
  const {jobTitle, company, period, content} = props;
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
    <div className="flex flex-row mt-4">
      <div className="w-1/4 pt-1.5">
        <h4 className="font-light">{period}</h4>  
      </div>
      <div className="w-3/4 pt-1 px-4 hover:shadow-lg rounded-xl transition-all duration-400 hover:bg-slate-200">
        <h4 className="text-lg font-light text-slate-900">{jobTitle}</h4>
        <h4 className="text-md font-thin italic text-slate-400">@ {company}</h4>
        {/* <p className="font-light">{content}</p> */}
        {renderContent()}
      </div>
    </div>
  );
}