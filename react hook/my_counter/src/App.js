import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleDecreaseCounter(e) {
    if (count > 0) {
      let changedCount = count - 1;
      setCount(changedCount);
    }
  }
  function handleIncreaseCounter(e) {
    let changedCount = count + 1;
    setCount(changedCount);
  }
  function handleResetCounter(e) {
    setCount(0);
  }
  useEffect(() => {
    console.log(`count ${count}`);
  }, [count]);
  return (
    <div className="App">
      <h2>Count Value is : {count}</h2>
      <div className="controllers">
        <button onClick={handleResetCounter}>Reset</button>
        <button onClick={handleIncreaseCounter}>Plus (+)</button>
        <button onClick={handleDecreaseCounter}>Minus (-)</button>
      </div>
    </div>
  );
}

export default App;
