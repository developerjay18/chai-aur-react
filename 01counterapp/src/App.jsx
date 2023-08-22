import { useState } from 'react';
import './App.css';

function App() {
  let [count, setcount] = useState(0);

  // to increase value
  const increase = () => {
    setcount(count + 1);
  };

  // to decrease value
  const descrease = () => {
    setcount(count - 1);
  };

  // to render only +ve and 0 value after checking condition
  const displayNum = () => {
    if (count >= 0) {
      return count;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div className="counter-container">
        <h1>@jayrai.18</h1>
        <h3>Counter value : {displayNum()}</h3>
        <button onClick={increase}>Increase</button> &nbsp; &nbsp;
        <button onClick={descrease}>Descrease</button>
      </div>
    </>
  );
}

export default App;
