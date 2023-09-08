import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState('usd');
  let [to, setTo] = useState('inr');
  let [finalValue, setFinalValue] = useState(0);

  // function to swap both components
  function swap() {
    setTo(from);
    setFrom(to);
    setAmount(finalValue);
    setFinalValue(amount);
  }

  // function for calculating results
  function convert() {
    setFinalValue(amount * currency[to]);
  }

  // fetching data from API and fecthing options from that too.
  let currency = useCurrencyInfo(from);

  let options = Object.keys(currency);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/932263/pexels-photo-932263.jpeg?auto=compress&cs=tinysrgb&w=3000')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amt) => {
                  setAmount(amt);
                }}
                currency={from}
                onCurrencyChange={(curr) => {
                  setFrom(curr);
                }}
                currencyOptions={options}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={finalValue}
                currency={to}
                onCurrencyChange={(curr) => {
                  setTo(curr);
                }}
                currencyOptions={options}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
