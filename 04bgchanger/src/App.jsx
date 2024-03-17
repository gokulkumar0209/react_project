import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
     {/* <h1 className='bg-green-500 text-3xl'>Vite BG changer</h1> */}
     <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}} ></div>
     <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
      onClick={()=>changeColor('red')}>Test</button>
      <button className='outline-none px-4 py-1 rounded-full text-green-600 shadow-lg'
      >Test</button>
    </>
  )
}

export default App
