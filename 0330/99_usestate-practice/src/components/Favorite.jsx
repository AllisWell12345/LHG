import React, { useState } from "react";

function Favorite() {
  const [select, setSelect] = useState({
    colorValue: "blue",
    fruitValue: "apple",
  });

  const handleSelectChange = (e) => {
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  return (
    <>
      <label htmlFor="colorValue">좋아하는 색상:</label>
      <select
        name="colorValue"
        id="colorValue"
        value={select.colorValue}
        onChange={handleSelectChange}
      >
        <option value="blue">파란색</option>
        <option value="red">빨간색</option>
        <option value="green">초록색</option>
        <option value="yellow">노란색</option>
      </select>
      <br />
      <label>좋아하는 과일:</label>
      <select
        name="fruitValue"
        id="fruitValue"
        value={select.fruitValue}
        onChange={handleSelectChange}
      >
        <option value="apple">🍎사과</option>
        <option value="banana">🍌바나나</option>
        <option value="orange">🍊오렌지</option>
        <option value="grape">🍇포도</option>
      </select>
      <br />
      <div>선택한 색상:{select.colorValue}</div>
      <div>선택한 과일:{select.fruitValue}</div>
    </>
  );
}

export default Favorite;
