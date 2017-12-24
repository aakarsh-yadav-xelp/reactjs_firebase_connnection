import * as userActions from "../actions/user.actions";
const agents = (
  state = {
    agents: [],
    status: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case userActions.GET_AGENTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });

    case userActions.GET_AGENTS_SUCCESS:
      return Object.assign({}, state, {
        agents: action.agents,
        status: action.status
      });

    case userActions.GET_AGENTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
};

export default agents;
