import { Dispatch } from 'redux';
import { addPost, AddPostAction } from './post';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT' as const;

export interface RequestData {
  id: string;
  password: string;
}
export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
  data: RequestData;
}
export const logInRequest = (data: RequestData): LogInRequestAction => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};
type SuccessData = { userId: number; nickname: string };
export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
  data: SuccessData;
}
export const logInSuccess = (data: SuccessData): LogInSuccessAction => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};

export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: Error;
}
export const logInFailure = (error: Error): LogInFailureAction => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
};

export interface LogOutAction {
  type: typeof LOG_OUT;
}
export const logOut = (): LogOutAction => {
  return {
    // action
    type: 'LOG_OUT',
  };
};

interface ThunkDispatch {
  (thunkAction: ThunkAction): void; //ThunkAction인 경우 리턴값이 없다, 아래 login의 경우
  <A>(action: A): A; //임의의 action인 경우 리턴값이 있다
  <TAction>(action: TAction | ThunkAction): TAction; //ThunkAction인 경우 또는 임의의 action인 경우= overloading (다양한 경우 고려하기)
}

type ThunkAction = (dispatch: ThunkDispatch) => void;
export const logIn = (data: RequestData): ThunkAction => {
  // async action creator, 여기서는 ThunkAction
  return (
    dispatch: Dispatch<LogInRequestAction | LogInSuccessAction | LogInFailureAction | LogOutAction | AddPostAction>,
  ) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'zerocho',
          }),
        );
      }, 1000);
      dispatch(addPost('hello'));
      // axios.post().then().catch()으로 나중에 대체
    } catch (err) {
      dispatch(logInFailure(err));
    }
  };
};
