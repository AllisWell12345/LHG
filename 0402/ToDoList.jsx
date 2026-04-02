import { useEffect, useRef, useState } from "react";

function ToDoListItem({ todo }) {
  const [isCheck, setIsCheck] = useState(false);

  const [isDelete, setIsDelete] = useState(false);

  const handleCheckChange = () => {
    setIsCheck(!isCheck);
  };

  const handleDeleteClick = () => {
    setIsDelete(!isDelete);
  };
  return isDelete ? (
    <></>
  ) : (
    <>
      <input type="checkbox" id={todo} onChange={handleCheckChange} />
      <label htmlFor={todo}>{isCheck ? <s>{todo}</s> : todo}</label>
      <button onClick={handleDeleteClick}>삭제</button>
      <br />
    </>
  );
}

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    setToDoList([...toDoList, inputValue]);
    setInputValue("");
  };

  const handleAddEnter = (e) => {
    if (e.key === "Enter") {
      setToDoList([...toDoList, inputValue]);
      setInputValue("");
    }
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [toDoList]);

  return (
    <div>
      <input
        type="text"
        placeholder="내 할일"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleAddEnter}
      />
      <button onClick={handleAddClick}>추가</button>
      <br />
      <div>
        {toDoList.map((todo, index) => (
          <ToDoListItem key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
