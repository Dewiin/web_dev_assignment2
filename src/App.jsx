import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  const colors = useRef([1,2,3,4,5]);

  function handleClick() {
    setIndex((prevState) => {
      return (prevState + 1) % colors.current.length;
    })
  }

  return (
    <>
      <button className='change-color-button' onClick={handleClick}> {index} </button>
    </>
  )
}

export default App
