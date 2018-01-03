import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const USER_LOGIN_REQUEST = "user_login_request";
export const USER_LOGIN_SUCCESS = "user_login_success";
export const USER_LOGIN_FAILURE = "user_login_failure";

export function userLoginRequest() {
  return {
    type: USER_LOGIN_REQUEST,
    status: REQUEST
  };
}
export function userLoginSuccess(user) {
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
  return async (dispatch, state) => {
    dispatch(userLoginRequest());
    try {
      let user = await fire
        .auth()
        .signInWithEmailAndPassword(userObj.email, userObj.password);
      console.log(user);
      let userRef = "/admin/" + user.uid;
      const userSnapshot = await fire
        .database()
        .ref(userRef)
        .once("value");

      dispatch(userLoginSuccess(userSnapshot.val()));
    } catch (e) {
      dispatch(userLoginFailure("Error in logging in user"));
    }
  };
}
