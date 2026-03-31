import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  console.log("?", answer);

  useEffect(() => {
    setAnswer(prompt("문자열을 입력해주세요"));
    console.log("???", answer);
    console.log("????", input);
  }, []);
  const onChangeHandler = (e) => {
    const startTime = new Date().getTime();
    setInput(e.target.value);
    console.log(startTime);
    if (answer === input) {
      const endTime = new Date().getTime();
      console.log(endTime);
      alert(`${Number(endTime) - Number(startTime)}ms`);
    }
  };
  return (
    <>
      <h1>{answer}</h1>
      <input type="text" value={input} onChange={onChangeHandler} />
      {console.log("??", input)}
    </>
  );
}

export default App;
