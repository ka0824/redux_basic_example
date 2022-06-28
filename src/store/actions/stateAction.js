export const CHANGESTATE = "CHANGE_STATE"; // 액션의 타입 이름 정하기

export const changeState = (payload) => {
  // 액션 객체 생성 함수 만들기
  return {
    type: CHANGESTATE,
    payload: payload,
  };
};
