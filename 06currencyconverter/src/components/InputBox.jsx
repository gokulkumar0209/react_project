import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="USD",
    amountDisabled=false,
    currencyDisabled=false,
    className='',
}) {
   const id=useId()
  return (
    <div className={`${className}`}>
        <div className=''>
            <label htmlFor='currency'>{label}</label>
            <input type='number'
            id={id}
             className=''
             placeholder='amount'
             disabled={amountDisabled}
             value={amount}
             onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
             />
        </div>
        <div>
          <p>Currency Type</p>
          <select value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
          disabled={currencyDisabled}>{currencyOptions.map((currency)=>{
            <option key={currency} value={currency}>{currency}</option>
          })}</select>
        </div>
    </div>

  )
}

export default InputBox