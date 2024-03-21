import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' h-screen w-full bg-cover  bg-center
     bg-slate-500' 
     style={{backgroundImage:`url(https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
      <div><h1>Currency Converter</h1></div>
     
     </div>
    </>
  )
}

export default App
