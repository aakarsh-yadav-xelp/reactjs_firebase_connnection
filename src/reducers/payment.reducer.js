import * as paymentActions from "../actions/payment.actions";
const payments = (
  state = {
    payments: null,
    status: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case paymentActions.GET_PAYMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });

    case paymentActions.GET_PAYMENT_SUCCESS:
      return Object.assign({}, state, {
        payments: action.payments,
        status: action.status
      });

    case paymentActions.GET_PAYMENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
};

export default payments;
