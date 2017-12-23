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

export function getAgentsRequest() {
  return {
    type: GET_AGENTS_REQUEST,
    status: REQUEST
  };
}
export function getAgentsSuccess(agents) {
  console.log(agents);
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
