import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(Date.now());
  console.log("?!", input);

  useEffect(() => {
    setAnswer(prompt("문자열을 입력해주세요"));
    console.log("???", answer);
    console.log("????", input);
  }, []);
  const onChangeHandler = (e) => {
    // setStartTime(Date.now());
    setInput(e.target.value);
    console.log("start", startTime);
    console.log("!", input);
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      if (answer === input) {
        const endTime = Date.now();
        console.log("end", endTime);
        alert(`${Number(endTime) - Number(startTime)}ms`);
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
      {console.log("??", input)}
    </>
  );
}

export default App;
