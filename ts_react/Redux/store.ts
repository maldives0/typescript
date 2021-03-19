import {
  createStore,
  compose,
  applyMiddleware,
  Dispatch,
  AnyAction,
  MiddlewareAPI,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};
const enhancer =
  process.env.NODE_ENV === "production" ? compose() : composeWithDevTools();
const store = createStore(reducer, initialState, enhancer);
export default store;
