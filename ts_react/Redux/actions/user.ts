import { Dispatch } from "redux";
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
      // axios.post().then().catch()으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

export const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

export const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

export const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};
