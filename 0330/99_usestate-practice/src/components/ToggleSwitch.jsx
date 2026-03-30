import React, { useState } from "react";

function ToggleSwitch() {
  const [toggle, setToggle] = useState({
    contentChecked: true,
    darkModeChecked: false,
  });

  const handleToggleChange = (e) => {
    setToggle({
      ...toggle,
      [e.target.name]: e.target.checked,
    });
    console.log(e.target.checked);
  };
  return (
    <>
      <input
        type="checkbox"
        name="contentChecked"
        id="contentChecked"
        checked={toggle.contentChecked}
        onChange={handleToggleChange}
      />
      <label htmlFor="contentChecked">
        콘텐츠 표시: {toggle.contentChecked ? "켜짐" : "꺼짐"}
      </label>
      <br />
      <input
        type="checkbox"
        name="darkModeChecked"
        id="darkModeChecked"
        checked={toggle.darkModeChecked}
        onChange={handleToggleChange}
      />
      <label htmlFor="darkModeChecked">
        다크모드: {toggle.darkModeChecked ? "🌙" : "☀️"}
      </label>
      <div>
        {toggle.contentChecked ? "🎉 이 메시지는 조건부로 표시됩니다!" : ""}
      </div>
    </>
  );
}

export default ToggleSwitch;
