import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className='',
}) {

  return (
    <div className={`${className}`}>
        <div className=''>
            <label>{label}</label>
            <input type='number'
             className=''
             placeholder='amount'
             disabled={amountDisabled}
             value={amount}
             onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
             >

            </input>
        </div>
    </div>

  )
}

export default InputBox