import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const USER_LOGIN_REQUEST = "user_login_request";
export const USER_LOGIN_SUCCESS = "user_login_success";
export const USER_LOGIN_FAILURE = "user_login_failure";

export function userLoginRequest() {
  return {
    status: REQUEST
  };
}
export function userLoginSuccess(user) {
  return {
    status: SUCCESS,
    user
  };
}
export function userLoginFailure(error) {
  return {
    status: FAILURE,
    error
  };
}
export function userLogin(userObj) {
  return async dispatch => {
    dispatch(userLoginRequest());
    try {
      let user = await fire
        .auth()
        .createUserWithEmailAndPassword(userObj.email, userObj.password);
      let firebaseUserPath = "/user/" + user.uid;
      await fire
        .database()
        .ref(firebaseUserPath)
        .update({
          FirstName: userObj.firstName,
          LastName: userObj.lastName,
          Email: userObj.email,
          PhoneNumber: userObj.phoneNumber,
          UID: user.uid
        });
      const userSnapshot = await fire
        .database()
        .ref(firebaseUserPath)
        .once("value");
      dispatch(userLoginSuccess(userSnapshot.val()));
    } catch (e) {
      dispatch(userLoginFailure("Error in logging in user"));
    }
  };
}
