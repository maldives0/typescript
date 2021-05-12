import * as React from 'react';
import { combineReducers } from 'redux';
import counter from './counterReducer';
const rootReducer = combineReducers({
  counter,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
