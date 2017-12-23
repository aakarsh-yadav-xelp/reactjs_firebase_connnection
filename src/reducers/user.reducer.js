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
    case userActions.GET_AGENTS_REQUEST:
      return Object.assign({}, state.user, {
        status: action.status
      });
    case userActions.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.user,
        state: action.status
      });
    case userActions.GET_AGENTS_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
        state: action.status
      });
    case userActions.USER_LOGIN_FAILURE:
    case userActions.GET_AGENTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
};

export default user;
