import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [symbolAllowed,setSymbolAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const passwordRef=useRef()
  const generatePassword=useCallback(()=>{
     let pass=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if (numberAllowed){
       str+="0123456789"
     }
     if(symbolAllowed){
       str+="!@#$%^&*"
     }
     for (let i=0;i<length;i++){
      let position = Math.floor(Math.random() * str.length); // Math.random() should not take any arguments
        pass += str[position];
     }
     setPassword(pass)
  },[length,numberAllowed,symbolAllowed])
  const copyPasswordToClipBoard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
useEffect(()=>{generatePassword()},[length,numberAllowed,symbolAllowed])
  return (
    <>
    <div className='grid justify-center items-center center h-40 m-40 bg-gray-300'>
      <div className='flex justify-center'><h1 className=' text-black font-serif'>Password Generator</h1></div>
      <div className='grid grid-cols-12 gap-2'>
          <input className='col-span-9 border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-md' type='text' value={password} readOnly placeholder='Password' ref={passwordRef}></input>
          <button className=" col-span-3  bg-blue-400 rounded-md "   onClick={()=>{copyPasswordToClipBoard()}}>Copy</button>
      </div>
      <div>
          <input type='range' min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/> 
          <label htmlFor='length'>Length:{length}</label>
      </div>
      <div>
          <input type="checkbox" defaultChecked={numberAllowed}
          onChange={()=>setNumberAllowed((prev)=>!prev)}/>
          <label htmlFor='number'>Numeric</label>
      </div>
      <div>
      <input type="checkbox" defaultChecked={setNumberAllowed}
          onChange={()=>setSymbolAllowed((prev)=>!prev)}/>
          <label htmlFor='symbol'>Symbol</label>
      </div>
      </div>
    </>
  )
}

export default App
