import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleNumberIncrease = () => {
    setNumber(number + 1);
  };
  const handleNumberDecrease = () => {
    setNumber((prev) => prev - 1);
  };
  const handleNumberReset = () => {
    setNumber(0);
  };
  return (
    <>
      <p>
        카운트: <b>{number}</b>
      </p>
      <br />
      <button onClick={handleNumberDecrease}>-1</button>
      <button onClick={handleNumberReset}>초기화</button>
      <button onClick={handleNumberIncrease}>+1</button>
    </>
  );
}

export default Counter;
