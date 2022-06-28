import { combineReducers } from "redux";
import stateReducer from "./stateReducer";

const rootReducer = combineReducers({ state: stateReducer }); // 상태의 이름 정하기, 리듀서 합치기

export default rootReducer;
