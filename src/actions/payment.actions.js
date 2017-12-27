import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const GET_PAYMENT_REQUEST = "GET_PAYMENT_request";
export const GET_PAYMENT_SUCCESS = "GET_PAYMENT_success";
export const GET_PAYMENT_FAILURE = "GET_PAYMENT_failure";

export function getPaymentRequest() {
  return {
    type: GET_PAYMENT_REQUEST,
    status: REQUEST
  };
}
export function getPaymentSuccess(payments) {
  return {
    type: GET_PAYMENT_SUCCESS,
    status: SUCCESS,
    payments
  };
}
export function getPaymentFailure(error) {
  return {
    type: GET_PAYMENT_FAILURE,
    status: FAILURE,
    error
  };
}
export function getPayment() {
  return async (dispatch, state) => {
    dispatch(getPaymentRequest());
    try {
      let ref = await fire.database().ref("payments");
      await ref.on(
        "value",
        async function(snapshot) {
          dispatch(getPaymentSuccess(snapshot.val()));
        },
        function(errorObject) {
          throw new Error("Error");
        }
      );
    } catch (e) {
      dispatch(getPaymentFailure("Error in logging in user"));
    }
  };
}
