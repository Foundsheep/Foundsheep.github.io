import { useState} from 'react';
import backgroundImage from "../images/background.jpeg";

function Header({title}) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header />
      <button onClick={handleClick}>Like ({likes})</button>
      <br></br>
      <img src={backgroundImage} alt="background image" />
    </div>
  );
}
