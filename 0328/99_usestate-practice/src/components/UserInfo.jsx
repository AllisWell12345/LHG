import React, { useState } from "react";

function UserInfo() {
  const [user, setUser] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <label htmlFor="userName">이름: </label>
      <input
        type="text"
        name="userName"
        value={user.userName}
        id="userName"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="userAge">나이: </label>
      <input
        type="number"
        name="userAge"
        value={user.userAge}
        id="userAge"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="userEmail">이메일: </label>
      <input
        type="email"
        name="userEmail"
        value={user.userEmail}
        id="userEmail"
        onChange={handleInputChange}
      />
      <br />
      <h3>프로필</h3>
      <div>
        {user.userName} ({user.userAge})
      </div>
      <div>📧 {user.userEmail}</div>
    </>
  );
}

export default UserInfo;
