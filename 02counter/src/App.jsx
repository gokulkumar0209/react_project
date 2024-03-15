import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  //  let counter=15;
   const addValue=()=>{
    setCounter(counter+1)
    // console.log(counter)
   }
   const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)}
   }
  return (
    <>
      <h1>React course </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>Footer :{counter} </p>
    </>
  )
}

export default App
