export default function Experience({props}) {  
  const projectBlock = props.projects?.map(({projectTitle, actions}) =>
    <div>
      <h3>{projectTitle}</h3>
      <ul>
        {actions.map((line) =>
          <li>{line}</li>
        )}
      </ul>
    </div>
  )

  return (
    <>
      <div>
        <div>{props.date}</div>
      </div>
      <div>
        <div>
          <h2>{props.title}</h2>
          <div>{projectBlock}</div>
        </div>
      </div>
    </>
  )
}