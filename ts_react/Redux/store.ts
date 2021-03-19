import { createStore, compose, applyMiddleware, Dispatch, AnyAction, MiddlewareAPI } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const loggingMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  console.log('로깅');
  next(action);
};
const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  if (typeof action === 'function') {
    //비동기
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
