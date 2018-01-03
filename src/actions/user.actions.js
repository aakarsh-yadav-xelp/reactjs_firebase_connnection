import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import jwt from "jsonwebtoken";
import fire from "../dbUtils/db_fire";
export const USER_VERIFY_SUCCESS = "USER_VERIFY_SUCCESS";
export const USER_VERIFY_FAILURE = "USER_VERIFY_FAILURE";
export const USER_LOGIN_REQUEST = "user_login_request";
export const USER_LOGIN_SUCCESS = "user_login_success";
export const USER_LOGIN_FAILURE = "user_login_failure";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

export function verifyUser() {
  let token = localStorage.getItem("asdaJwtToken");
  if (token) {
    return {
      type: USER_VERIFY_SUCCESS
    };
  } else {
    return {
      type: USER_VERIFY_FAILURE
    };
  }
}
export function logOutUser() {
  localStorage.setItem("asdaJwtToken", null);
  return {
    type: USER_LOGOUT_SUCCESS
  };
}
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
  return async (dispatch, state) => {
    dispatch(userLoginRequest());
    try {
      const userSnapshot = await fire
        .database()
        .ref("admin")
        .once("value");
      if (
        userObj.email == userSnapshot.val().userName &&
        userObj.password == userSnapshot.val().password
      ) {
        let token = await jwt.sign(userObj, "MyNAMEAAKARSH", {
          expiresIn: "1h"
        });
        localStorage.setItem("asdaJwtToken", JSON.stringify(token));
        dispatch(userLoginSuccess(userObj.email));
      } else {
        throw new Error("error in login");
      }
    } catch (e) {
      dispatch(userLoginFailure("Error in logging in user"));
    }
  };
}
