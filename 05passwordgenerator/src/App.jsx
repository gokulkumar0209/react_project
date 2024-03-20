import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [symbolAllowed,setSymbolAllowed]=useState(false)
  const [password,setPassword]=useState('')
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed){
    str+="0123456789"
  }
  if(symbolAllowed){
    str+="!@#$%^&*"
  }
  

  return (
    <>
    <div>
      <h1>Password Generator</h1>
      <div>
          <input type='text' value={password} readOnly placeholder='Password'></input>
          <button>Copy</button>
      </div>
      <div>
          <input type='range' min={8} max={20} value={length}/>
          
      </div>
      <div>
          <input type="checkbox" />
          <label htmlFor='number'>Numeric</label>
      </div>
      <div>
          <input type="checkbox" />
          <label htmlFor='special'>Symbols</label>
      </div>
      </div>
    </>
  )
}

export default App
