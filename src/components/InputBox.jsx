import { useId } from "react";

export default function InputBox({
  label,
  currency = "usd",
  OnCurrencyChange,
  amount,
  OnAmountChange,
  currencyList = [],
}) {
  const amountId = useId(); // not to be used as keys in list
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            OnAmountChange && OnAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currency}
          onChange={(e) => OnCurrencyChange && OnCurrencyChange(e.target.value)}
        >
          {currencyList.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
