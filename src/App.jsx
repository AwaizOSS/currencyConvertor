import { useState } from "react";
import "./App.css";
import { InputBox } from "./components"; // we dont need to mention index.js, in other words this is centralised imports
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convert = () => {
    setToAmount(fromAmount * currencyInfo[toCurrency]);
  };

  return (
    <>
      {/* <InputBox label="From" />
      <button>swap</button>
      <InputBox label="To" />
      <button onClick={convert}>Convert</button> */}
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://picsum.photos/id/14/1080')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  currency={fromCurrency}
                  OnCurrencyChange={(c) => setFromCurrency(c)}
                  OnAmountChange={(a) => setFromAmount(a)}
                  amount={fromAmount}
                  currencyList={options}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  currency={toCurrency}
                  OnCurrencyChange={(c) => setToCurrency(c)}
                  OnAmountChange={(a) => setToAmount(a)}
                  amount={toAmount}
                  currencyList={options}
                />
              </div>
              <button
                type="submit"
                onClick={convert}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {fromCurrency.toUpperCase()} to{" "}
                {toCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
