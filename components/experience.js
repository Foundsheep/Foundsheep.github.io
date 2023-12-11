export default function Experience(date) {
  const array = ["AAA", "BBB", "CCC"]
  
  return (
    <>
      <div>
        <div>date</div>
      </div>
      <div>
        <ul>
          {array.map((line) => (
            <li>{line}</li>
          ))}
        </ul>
      </div>
    </>
  )
}