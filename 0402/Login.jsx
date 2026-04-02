import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [isCheck, setIsCheck] = useState(false);

  const handleKeepChange = () => {
    setIsCheck(!isCheck);
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginClick = () => {
    alert(`
    로그인 시도!
    사용자: ${user.userName}
    기억하기: ${isCheck ? "예" : "아니오"}`);
    setUser({
      userName: "",
      password: "",
    });
  };
  return (
    <>
      <label htmlFor="userName">사용자명: </label>
      <input
        type="text"
        placeholder="사용자명"
        id="userName"
        name="userName"
        value={user.userName}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="password">비밀번호: </label>
      <input
        type="password"
        placeholder="비밀번호"
        id="password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <br />
      <input type="checkbox" id="loginKeep" onChange={handleKeepChange} />
      <label htmlFor="loginKeep">로그인 상태 유지</label>
      <br />
      <button
        disabled={!(Boolean(user.userName) && Boolean(user.password))}
        onClick={handleLoginClick}
      >
        로그인
      </button>
      {console.log("?", !Boolean(user.userName) && !Boolean(user.password))}
    </>
  );
}

export default Login;
