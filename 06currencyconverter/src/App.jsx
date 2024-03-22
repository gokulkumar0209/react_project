import { useState } from 'react'
import  InputBox  from './components/InputBox'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('GBP')
  const [to, setTo] = useState('EUR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  // console.log(currencyInfo)
  const options = Object.keys(currencyInfo)
  // console.log(options)
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className=' h-screen w-full bg-cover  bg-center
     bg-slate-500'
        style={{ backgroundImage: `url(https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
        <div><h1>Currency Converter</h1></div>
        <InputBox>
        <div>
          <div>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div>
                <InputBox 
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>{setFrom(from)}}
                onAmountChange={(amount)=>{setAmount(amount)}}
                />
                
              </div>
            </form>
          </div>
        </div>
        </InputBox>
      </div>
    </>
  )
}

export default App
