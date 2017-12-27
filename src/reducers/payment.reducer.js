import * as paymentActions from "../actions/payment.actions";
import _ from "lodash";
const payments = (
  state = {
    payments: null,
    status: null,
    error: null
  },
  action
) => {
  let temmPayments = [];
  switch (action.type) {
    case paymentActions.GET_PAYMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });

    case paymentActions.GET_PAYMENT_SUCCESS:
      _.mapValues(action.payments, item => {
        _.mapValues(item, i => {
          temmPayments.push(i);
          return i;
        });
      });
      return Object.assign({}, state, {
        payments: temmPayments,
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
