import { createStore, compose, applyMiddleware, Dispatch, AnyAction, MiddlewareAPI } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThunkAction, ThunkDispatch } from './actions/user';
import reducer from './reducers';
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const loggingMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  console.log('로깅', action);
  next(action);
};
const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  if (typeof action === 'function') {
    //비동기
    console.log('thunk', store, ':::', store.getState);
    return action(store.dispatch, store.getState); //action은 원래 객체, 비동기에서는 함수로 바꾸어주므로 typing때 AnyAction을 바꿀 필요가 생김
  }
  return next(action); //동기
};
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(loggingMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(loggingMiddleware, thunkMiddleware));
const store = createStore(reducer, initialState, enhancer);
export default store;
