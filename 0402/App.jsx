import Calculator from "./components/Calculator";
import Item from "./components/Item";
import Login from "./components/Login";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      {/* 1) 할 일 목록 컴포넌트 제작 */}
      <h2>할 일 목록</h2>
      <ToDoList />
      <hr />
      {/* 2) 간단한 계산기 컴포넌트 제작 */}
      <h2>간단한 계산기</h2>
      <Calculator />
      <hr />
      {/* 3) 아이템 선택 컴포넌트 제작 */}
      <h2>아이템 선택</h2>
      <Item />
      <hr />
      {/* 4) 로그인 폼 컴포넌트 제작 */}
      <h2>로그인 폼</h2>
      <Login />
      <hr />
    </>
  );
}

export default App;
