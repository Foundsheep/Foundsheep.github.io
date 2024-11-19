import { Summary } from "@/components/cv/summary";
import Image from "next/image";

export default function Philosophy() {

  const headingStyle = "mb-4 mt-10 font-medium text-center"
  const listStyle = "list-decimal list-inside"
  return <>
    <h4 className={headingStyle + ' mt-0'}>Introduction</h4>
    <p className="mb-0">I belive what underlies every detail and behaviours execuded in everyone's work is what they <span className="italic">value</span>, <span className="italic">belive in</span> or have as <span className="italic">philosophies</span>, albeit not recognised. Therefore, you will be able to understand and could have expectations of how DJ would work and behave from the below statements</p>
    
    <h4 className={headingStyle}>Those regarding 'dev'</h4>
    <ol className={listStyle}>
      <li><span className="italic">"The import thing is not to stop questioning; curiosity has its own reason for existing."</span> - Albert Einstein</li>
      <li>Not GPT first, but documentation first</li>
      <li>Not about speed, but direction</li>
      <li>Try to understand the philosophy and what's under the hood of the tool as much as I can</li>
      <li>No hassle to show off such as meaningless blogs, but to satisfy myself and clients</li>
    </ol>
    
    <h4 className={headingStyle}>Those regarding 'life'</h4>
    <ol className={listStyle}>
    </ol>

  </>
}