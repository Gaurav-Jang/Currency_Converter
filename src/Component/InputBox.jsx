import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selecturrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(); // using this is  a way to bind the label and input
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} // check in this field is disabled or not  only been used if this  mewthod is passed
          value={amount} ///it give value which has to be change
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } // check if it exist or not
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selecturrency} ///it select currency
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option> // using key is best practice
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
