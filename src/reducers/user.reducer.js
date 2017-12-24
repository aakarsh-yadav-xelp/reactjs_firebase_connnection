import * as userActions from "../actions/user.actions";
const user = (
  state = {
    isLoggedIn: false,
    user: null,
    status: null,
    error: null
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case userActions.USER_LOGIN_REQUEST:
      return Object.assign({}, state.user, {
        status: action.status
      });
    case userActions.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.user,
        status: action.status
      });
    case userActions.USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
};

export default user;
