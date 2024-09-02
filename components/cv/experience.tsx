type ExperienceProps = {
  jobTitle: string;
  company: string;
  period: string;
  content: string;
}

export function Experience(props: ExperienceProps) {
  const {jobTitle, company, period, content} = props;
  return <div className="bg-slate-200 rounded-xl max-w-2xl mt-4 mx-4 lg:mx-auto p-4">
      <h4 className="text-xl font-bold">
        <span className="rounded-lg bg-slate-100">{jobTitle}</span>
        <span> @ {company}</span>
      </h4>
      <h6 className="font-light">{period}</h6>
      <p>{content}</p>
  </div>
}