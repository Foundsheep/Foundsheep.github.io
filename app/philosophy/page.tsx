import Image from "next/image";

export default function Philosophy() {

  const headingStyle = "mb-4 mt-10 font-medium text-center"
  const listStyle = "list-decimal list-inside"
  return <>
    <h4 className={headingStyle + ' mt-0'}>Introduction</h4>
    <p className="mb-0">I belive what underlies every detail and behaviour executed in everyone's work is what they <span className="italic">value</span>, or <span className="italic">belive in</span> like <span className="italic">philosophies</span>. Therefore, you will be able to understand how I would work by the below statements</p>
    
    <h4 className={headingStyle}>Those regarding 'dev'</h4>
    <ol className={listStyle}>
      <li><span className="italic">"The important thing is not to stop questioning; curiosity has its own reason for existing."</span> - Albert Einstein</li>
      <li>Keep things simple</li>
      <li>Try to understand the underlying mathematics, but remember its intuition</li>
      <li>Always verify what the colleages say, who tend to go to GPT first and have long conversations with it</li>
      {/* <li>Not GPT first, but documentation first</li> */}
      <li>Not about speed, but direction</li>
      <li>Try to understand the philosophy of tools and what's under the hood</li>
      {/* <li>No hassle to show off for career such as copied-and-pasted blogs.</li> */}
      {/* <li>No matter what, client's needs should be priortised the most</li> */}
    </ol>
    
    <h4 className={headingStyle}>Those regarding 'life'</h4>
    <ol className={listStyle}>
      <li>Be humble and remember the merciful Creator</li>
      {/* <li>Learn how to confront the real you. Otherwise, the One you would think you had met would be in disguise too</li> */}
      <li>Don't lose joy at all costs. Otherwise, your life would turn into a miserable loop</li>
      <li>Be thrilled by your every little success.</li>
      <li>Every day has its own purpose. Being still able to breathe means it</li>
      <li>The longer you live, the more you need to discard from your life to avoid being overwhelmed by it</li>
    </ol>

  </>
}