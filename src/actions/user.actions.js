import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const USER_LOGIN_REQUEST = "user_login_request";
export const USER_LOGIN_SUCCESS = "user_login_success";
export const USER_LOGIN_FAILURE = "user_login_failure";
export const GET_AGENTS_REQUEST = "GET_AGENTS_request";
export const GET_AGENTS_SUCCESS = "GET_AGENTS_success";
export const GET_AGENTS_FAILURE = "GET_AGENTS_failure";

export function userLoginRequest() {
  return {
    type: USER_LOGIN_SUCCESS,
    status: REQUEST
  };
}
export function userLoginSuccess(user) {
  console.log(user);
  return {
    type: USER_LOGIN_SUCCESS,
    status: SUCCESS,
    user
  };
}
export function userLoginFailure(error) {
  return {
    type: USER_LOGIN_FAILURE,
    status: FAILURE,
    error
  };
}
export function userLogin(userObj) {
  console.log(userObj);
  return async dispatch => {
    dispatch(userLoginRequest());
    if (userObj.email === "admin" && userObj.password === "idiotBox") {
      dispatch(userLoginSuccess("admin"));
    } else {
      dispatch(userLoginFailure("Invalid detail"));
    }
  };
}

export function getAgentsRequest() {
  return {
    type: GET_AGENTS_REQUEST,
    status: REQUEST
  };
}
export function getAgentsSuccess(agents) {
  return {
    type: GET_AGENTS_SUCCESS,
    status: SUCCESS,
    agents
  };
}
export function getAgentsFailure(error) {
  return {
    type: GET_AGENTS_FAILURE,
    status: FAILURE,
    error
  };
}
export function getAgents(userObj) {
  return async (dispatch, state) => {
    dispatch(getAgentsRequest());
    try {
      let ref = await fire.database().ref("users");
      await ref.on(
        "value",
        async function(snapshot) {
          dispatch(getAgentsSuccess(snapshot.val()));
        },
        function(errorObject) {
          throw new Error("Error");
        }
      );
    } catch (e) {
      dispatch(getAgentsFailure("Error in logging in user"));
    }
  };
}
