import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  //  function changeColor(color){
  //   setColor(color)
  //  }
  return (
    <>
      <div className=" grid ">

        <div className=" min-h-[550px] " style={{backgroundColor:color}}></div>
        <div className=" min-h-[50px] grid bg-cyan-800 gap-2 grid-cols-4">
          <button className="bg-yellow-300 rounded-xl" onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className="bg-lime-700 rounded-xl" onClick={()=>{setColor("green")}}>Green</button>
          <button className="bg-red-600 rounded-xl" onClick={()=>{setColor("red")}}>Red</button>
          <button className="bg-blue-500 rounded-xl"onClick={()=>{setColor("blue")}}>Blue</button>
        </div>

      </div>
    </>
  )
}

export default App
