import React, { useRef, useState } from "react";

const Counter = () => {
  const [display, setDisplay] = useState(0);
  const step = useRef(1);
  function stepHandler(value){
    step.current=Number(value)

  }
  function plusHandler() {
    setDisplay((prev) => prev + step.current);
  }
  function minusHandler() {
    setDisplay((prev) => prev - step.current);
  }
  // console.log(typeof value);
  function resetHandler() {
    setDisplay(0);
  }

  return (
    <div>
      <p>{display}</p>
      <div>
        <button onClick={minusHandler}>➖</button>
        <button onClick={plusHandler}>➕</button>
      </div>
      <div>
        <label>Increment/Decrement by</label>
        <input
          type="number"
          defaultValue={step.current}
          onChange={(e)=> stepHandler(e.target.value)}
        />
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
