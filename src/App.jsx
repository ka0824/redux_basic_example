import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "./store/actions/stateAction";

function App() {
  const dispatch = useDispatch(); // dispatch 함수 불러오기
  const state = useSelector((state) => state.state.behavior); // 상태 값 받아오기

  const handleButton = (e) => {
    dispatch(changeState(e.target.textContent)); // 액션 객체 생성 함수 changeState 사용하여 액션 dispatch
  };

  return (
    <div className="App">
      <button onClick={handleButton}>sleeping</button>
      <button onClick={handleButton}>studying</button>
      <button onClick={handleButton}>eating</button>
      <div>지금 상태는 {state} 입니다.</div>
    </div>
  );
}

export default App;
