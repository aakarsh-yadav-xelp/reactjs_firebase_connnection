import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const GET_MESSAGE_REQUEST = "GET_MESSAGE_request";
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_success";
export const GET_MESSAGE_FAILURE = "GET_MESSAGE_failure";

export function getMessageRequest() {
  return {
    type: GET_MESSAGE_REQUEST,
    status: REQUEST
  };
}
export function getMessageSuccess(messages) {
  return {
    type: GET_MESSAGE_SUCCESS,
    status: SUCCESS,
    messages
  };
}
export function getMessageFailure(error) {
  return {
    type: GET_MESSAGE_FAILURE,
    status: FAILURE,
    error
  };
}
export function getMessage() {
  return async (dispatch, state) => {
    dispatch(getMessageRequest());
    try {
      let ref = await fire.database().ref("message");
      await ref.on(
        "value",
        async function(snapshot) {
          dispatch(getMessageSuccess(snapshot.val()));
        },
        function(errorObject) {
          throw new Error("Error");
        }
      );
    } catch (e) {
      dispatch(getMessageFailure("Error in logging in user"));
    }
  };
}
