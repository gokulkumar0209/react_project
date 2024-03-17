import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='text-3xl bg-green-500'>Vite with Tailwind</h1>
   <Card source="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?w=900&t=st=1710660574~exp=1710661174~hmac=5a25d79b570876c96539a264e4d17734eab43e3724e59de2a0387582a3da1086"></Card>
   <Card username="Hello"></Card>
   <Card username=""></Card>
    </>
  )
}

export default App
