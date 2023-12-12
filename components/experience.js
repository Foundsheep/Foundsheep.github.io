import cvStyles from "../styles/cv.module.css";

export default function Experience({ props }) {  

  return (
    <>
      <div className={cvStyles.row}>
        <br></br>
        <div className={ cvStyles.date}>{ props.date }</div>
        <div className={ cvStyles.cvItem }>          
          <h5>{props.title}</h5>
          <ul>
            { props.info.map((line) => (
              <li className={cvStyles.itemLine}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}