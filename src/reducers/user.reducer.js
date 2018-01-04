import * as userActions from "../actions/user.actions";
const user = (
  state = {
    isLoggedIn: false,
    user: null,
    isPassWordVerify: false,
    status: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case userActions.USER_LOGIN_REQUEST:
    case userActions.PASSWORD_VERIFY_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    case userActions.USER_LOGIN_SUCCESS:
    case userActions.USER_VERIFY_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.user,
        status: action.status
      });
    case userActions.PASSWORD_VERIFY_SUCCESS:
      return Object.assign({}, state, {
        isPassWordVerify: true
      });
    case userActions.ON_EDIT_CLOSE:
    case userActions.PASSWORD_VERIFY_FAILURE:
      return Object.assign({}, state, {
        isPassWordVerify: false
      });
    case userActions.USER_LOGIN_FAILURE:
    case userActions.USER_VERIFY_FAILURE:
    case userActions.USER_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: false,
        status: action.status,
        error: action.error,
        isPassWordVerify: false
      });
    default:
      return state;
  }
};

export default user;
