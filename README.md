## redux 기본 예제


<br />

> ### 실행 방법

<br />

```
npm i
npm run dev
```

<br />

> ### 리덕스 동작 과정

<br />

- 액션 => 디스패치 => 리듀서 => 상태 변화

- 액션 : 행하고자 하는 작업의 타입과, 인자(생략 가능)을 담은 객체
- 디스패치 : 액션을 리듀서로 전달해주는 함수
- 리듀서 : 액션 객체를 인자로 받아, 액션의 타입에 따라 정해진 작업을 수행하는 함수
- 스토어 : 상태와 리듀서를 저장하는 공간

<br />

> ### 리덕스 구현과정 코드로 살펴보기

<br />

액션 객체 생성 함수 만들기

```js
// redux_basic_example/src/store/actions/stateAction.js 


export const CHANGESTATE = "CHANGE_STATE"; // 액션의 타입 이름 정하기

export const changeState = (payload) => {
  // 액션 객체 생성 함수 만들기
  return {
    type: CHANGESTATE,
    payload: payload,
  };
};
```

<br />

리듀서 생성하기

<br />

```js

// redux_basic_example/src/store/reducers/stateReducer.js 

import { CHANGESTATE } from "./../actions/stateAction"; // 액션의 타입 이름 가져오기

const initialState = { // 초기 상태 설정하기
  behavior: "nothing",
};

const stateReducer = (state = initialState, action) => {
  switch (
    action.type // 액션의 타입에 따라 분기 나누기
  ) {
    case CHANGESTATE:
      return { behavior: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export default stateReducer;

```

<br />

생성된 리듀서 하나로 합치기

<br />

```js
// redux_basic_example/src/store/reducers/rootReducer.js


import { combineReducers } from "redux";
import stateReducer from "./stateReducer";

const rootReducer = combineReducers({ state: stateReducer }); // 상태의 이름 정하기, 리듀서 합치기

export default rootReducer;

```

<br />

스토어 생성하기

<br />

```js
// redux_basic_example/src/store/store.js


import rootReducer from "./reducers/rootReducer";
import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";  // 개발자 도구 추가

const store = legacy_createStore(rootReducer, composeWithDevTools());

export default store;

```

<br />

스토어, 리액트 연결하기

<br />

```js
// redux_basic_example/src/main.jsx


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>       // Provider 컴포넌트로 가장 상위의 컴포넌트를 감싼 뒤, store 값 넣어줌.
      <App />
    </Provider>
  </React.StrictMode>
);

```

<br />

상태 조회하고, 변경하기

<br />

```js
// redux_basic_example/src/App.jsx 


import "./App.css";
import { useDispatch, useSelector } from "react-redux";       // useDispatch : 상태 변경 ,   useSelector: 상태 조회
import { changeState } from "./store/actions/stateAction";    // 액션 객체 생성 함수 불러오기

function App() {
  const dispatch = useDispatch(); // dispatch 함수 불러오기
  const state = useSelector((state) => state.state.behavior); // 상태 값 받아오기 (devtool로 상태 구성 확인하기)

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
```

<br />

> ### redux-devtools 사용하기

<br/>

- 리덕스 개발자 도구 실행하기

<br/>

![redux_devtools_1](https://user-images.githubusercontent.com/79782594/176324578-f0688738-f5ca-4696-a3dd-8f1b7425bf27.png)

<br />

- 리덕스 개발자 도구 확인하기

<br />

![redux_devtools_2](https://user-images.githubusercontent.com/79782594/176324650-9381b74b-f6cf-406a-9607-ade9cdbf4f72.png)

