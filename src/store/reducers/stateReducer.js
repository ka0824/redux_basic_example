import { CHANGESTATE } from "./../actions/stateAction"; // 액션의 타입 이름 가져오기

const initialState = {
  // 초기 상태 설정하기
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
