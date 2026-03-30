import React, { useState } from "react";

function Favorite() {
  const [select, setSelect] = useState({
    colorValue: "파란색",
    fruitValue: "🍎사과",
  });

  const handleSelectChange = (e) => {
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
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
        <option>파란색</option>
        <option>빨간색</option>
        <option>초록색</option>
        <option>노란색</option>
      </select>
      <br />
      <label>좋아하는 과일:</label>
      <select
        name="fruitValue"
        id="fruitValue"
        value={select.fruitValue}
        onChange={handleSelectChange}
      >
        <option>🍎사과</option>
        <option>🍌바나나</option>
        <option>🍊오렌지</option>
        <option>🍇포도</option>
      </select>
      <br />
      <div>
        선택한 색상:
        {select.colorValue === "파란색"
          ? "blue"
          : select.colorValue === "빨간색"
            ? "red"
            : select.colorValue === "초록색"
              ? "green"
              : select.colorValue === "노란색"
                ? "yellow"
                : ""}
      </div>
      <div>
        선택한 과일:
        {select.fruitValue === "🍎사과"
          ? "apple"
          : select.fruitValue === "🍌바나나"
            ? "banana"
            : select.fruitValue === "🍊오렌지"
              ? "orange"
              : select.fruitValue === "🍇포도"
                ? "grape"
                : ""}
      </div>
    </>
  );
}

export default Favorite;
