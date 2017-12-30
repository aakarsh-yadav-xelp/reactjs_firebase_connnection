import * as agentsActions from "../actions/agent.actions";
import _ from "lodash";
const agents = (
  state = {
    agents: null,
    status: null,
    error: null
  },
  action
) => {
  let currentAgents,
    tempAgents = [],
    indexToBeUpdate;
  switch (action.type) {
    case agentsActions.GET_AGENTS_REQUEST:
    case agentsActions.UPDATE_AGENTS_REQUEST:
    case agentsActions.CREATE_AGENTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });

    case agentsActions.UPDATE_AGENTS_SUCCESS:
      currentAgents = _.cloneDeep(state.agents);
      indexToBeUpdate = _.findIndex(
        state.agents,
        agent => agent.idNumber === action.agent.idNumber
      );
      currentAgents.slice(indexToBeUpdate, action.agent);

      return Object.assign({}, state, {
        agents: currentAgents,
        status: action.status
      });
    case agentsActions.CREATE_AGENTS_SUCCESS:
    case agentsActions.GET_AGENTS_SUCCESS:
      currentAgents = _.mapValues(action.agents, item => {
        tempAgents.push(item);
      });
      return Object.assign({}, state, {
        agents: tempAgents,
        status: action.status
      });
    case agentsActions.GET_AGENTS_FAILURE:
    case agentsActions.UPDATE_AGENTS_FAILURE:
    case agentsActions.CREATE_AGENTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
};

export default agents;
