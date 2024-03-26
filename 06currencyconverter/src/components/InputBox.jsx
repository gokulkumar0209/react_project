import React, { useId } from 'react'
import currencies from './currencies'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = Object.keys(currencies),
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) {

  const id = useId()
  return (
    <div className={`${className}`}>
      <div className=''>
        <label htmlFor={id}>{label}</label>
        <input type='number'
          id={id}
          className=''
          placeholder='amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div>
        <p>Currency Type</p>
       
        <select value={selectedCurrency} onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          disabled={currencyDisabled}
        >
          {/* Iterate over the array and create option elements */}
          {currencyOptions.map((optionText, index) => (
            <option key={index}>{optionText}</option>
          ))}
        </select>
      </div>
    </div>

  )
}

export default InputBox