import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const colors = useRef(["#CC0003", "#FE6734", "#C4BC31", "#50723C", "#32C3BB", "#6852A3", "#7E3A5C", "#D88C9A"]);
  const textColor = useRef(["white", "black", "black", "white", "black", "white", "white", "black"]);

  useEffect(() => {
    document.body.style.backgroundColor = `${colors.current[index]}`;

    const buttonText = document.querySelector(".change-color-button");
    buttonText.style = `color: ${textColor.current[index]}`;
  }, [index])

  function handleClick() {
    setIndex((prevState) => {
      return (prevState + 1) % colors.current.length;
    })
  }

  return (
    <>
      <button className='change-color-button' onClick={handleClick}> Click! </button>
    </>
  )
}

export default App
