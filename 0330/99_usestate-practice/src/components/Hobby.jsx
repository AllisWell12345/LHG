import React, { useState } from "react";

function Hobby() {
  const [isChecked, setIsChecked] = useState({
    reading: false,
    music: false,
    sports: false,
    coding: false,
  });

  const handleCheckedChange = (e) => {
    setIsChecked({
      ...isChecked,
      [e.target.name]: e.target.checked,
    });
  };

  const checkedOutput = Object.keys(isChecked).filter((key) => isChecked[key]);

  return (
    <>
      <input
        type="checkbox"
        name="reading"
        id="reading"
        checked={isChecked.reading}
        onChange={handleCheckedChange}
      />
      <label htmlFor="reading">📚독서</label>
      <br />
      <input
        type="checkbox"
        name="music"
        id="music"
        checked={isChecked.music}
        onChange={handleCheckedChange}
      />
      <label htmlFor="music">🎵음악</label>
      <br />
      <input
        type="checkbox"
        name="sports"
        id="sports"
        checked={isChecked.sports}
        onChange={handleCheckedChange}
      />
      <label htmlFor="sports">🤼운동</label>
      <br />
      <input
        type="checkbox"
        name="coding"
        id="coding"
        checked={isChecked.coding}
        onChange={handleCheckedChange}
      />
      <label htmlFor="coding">💻코딩</label>
      <br />
      <h3>선택된 취미</h3>
      <div>{checkedOutput.length > 0 ? checkedOutput.join(", ") : "없음"}</div>
    </>
  );
}

export default Hobby;
