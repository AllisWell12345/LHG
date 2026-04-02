import React, { useState } from "react";

function Calculator() {
  const [numbers, setNumber] = useState({
    num1: 10,
    num2: 5,
  });

  const handleInputChange = (e) => {
    setNumber({
      ...numbers,
      [e.target.name]: Number(e.target.value),
    });
  };

  return (
    <>
      <label>숫자 1: </label>
      <input
        type="number"
        id="num1"
        name="num1"
        value={Number(numbers.num1)}
        onChange={handleInputChange}
      />
      <br />
      <label>숫자 2: </label>
      <input
        type="number"
        id="num2"
        name="num2"
        value={Number(numbers.num2)}
        onChange={handleInputChange}
      />
      <div>
        덧셈: {numbers.num1} + {numbers.num2} = {numbers.num1 + numbers.num2}
      </div>
      <div>
        뺼셈: {numbers.num1} - {numbers.num2} = {numbers.num1 - numbers.num2}
      </div>
      <div>
        곱셈: {numbers.num1} × {numbers.num2} = {numbers.num1 * numbers.num2}
      </div>
      <div>
        나눗셈: {numbers.num1} ÷ {numbers.num2} ={" "}
        {(numbers.num1 / numbers.num2).toFixed(2)}
      </div>
    </>
  );
}

export default Calculator;
