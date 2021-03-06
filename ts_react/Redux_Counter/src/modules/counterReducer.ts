const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({
  type: INCREASE,
}); //화살표함수에서 객체 리터럴 표현을 반환하기 위해서는 함수 본문(body)을 괄호 속에 넣음
export const decrease = () => ({
  type: DECREASE,
});
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;
type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};

function counterReducer(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
export default counterReducer;
