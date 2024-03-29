import { useState } from "react";
import InputBox from "./components/InputBox";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import currencies from "./components/currencies";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  // console.log(currencyInfo)
  const options = Object.keys(currencies);
  // console.log(options)
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div
        className=" h-screen w-full bg-cover  bg-center
     bg-slate-500"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div>
          <h1>Currency Converter</h1>
        </div>
        <form
          onSubmit={(e) => {
            console.log("Hi");
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="from"
            amount={amount}
            currencyOptions={options}
            selectedCurrency={from}
            onCurrencyChange={(currencx) => {
              setFrom(currencx);
            }}
            onAmountChange={(amount) => setAmount(amount)}
          ></InputBox>
          <InputBox selectedCurrency={to}></InputBox>
          <button type="submit">Convert</button>
        </form>
      </div>
    </>
  );
}

export default App;
