import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setAnswer(prompt("문자열을 입력해주세요"));
    return;
  }, []);
  const onChangeHandler = (e) => {
    setStartTime(Date.now());
    setInput(e.target.value);
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      if (answer === input) {
        const endTime = Date.now();
        alert(`${Number(endTime) - Number(startTime)}ms`);
        setAnswer(prompt("문자열을 입력해주세요"));
        setInput("");
      }
    }
  };
  return (
    <>
      <h1>{answer}</h1>
      <input
        type="text"
        value={input}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </>
  );
}

export default App;
