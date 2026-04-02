import React, { useState } from "react";

function Item() {
  const [fruits, setFruits] = useState("");

  const handleOnClick = (e) => {
    setFruits(e.target.value);
  };
  return (
    <>
      <button value={"사과"} onClick={handleOnClick}>
        사과
      </button>
      <button value={"바나나"} onClick={handleOnClick}>
        바나나
      </button>
      <button value={"오렌지"} onClick={handleOnClick}>
        오렌지
      </button>
      <button value={"포도"} onClick={handleOnClick}>
        포도
      </button>
      <button value={"딸기"} onClick={handleOnClick}>
        딸기
      </button>
      <div>선택된 과일 : {fruits ? `${fruits}` : "없음"}</div>
      <div>{fruits.length > 0 ? `🎉${fruits}를 선택하셨습니다!` : ""}</div>
    </>
  );
}

export default Item;
