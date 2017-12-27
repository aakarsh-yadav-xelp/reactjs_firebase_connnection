import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const GET_AGENTS_REQUEST = "GET_AGENTS_request";
export const GET_AGENTS_SUCCESS = "GET_AGENTS_success";
export const GET_AGENTS_FAILURE = "GET_AGENTS_failure";

export const UPDATE_AGENTS_REQUEST = "UPDATE_AGENTS_request";
export const UPDATE_AGENTS_SUCCESS = "UPDATE_AGENTS_success";
export const UPDATE_AGENTS_FAILURE = "UPDATE_AGENTS_failure";

export function getAgentsRequest() {
  return {
    type: GET_AGENTS_REQUEST,
    status: REQUEST
  };
}
export function getAgentsSuccess(agents) {
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

export function updateAgentRequest() {
  return {
    type: UPDATE_AGENTS_REQUEST,
    status: REQUEST
  };
}
export function updateAgentSuccess(agent) {
  return {
    type: UPDATE_AGENTS_SUCCESS,
    status: SUCCESS,
    agent
  };
}
export function updateAgentFailure(error) {
  return {
    type: UPDATE_AGENTS_FAILURE,
    status: FAILURE,
    error
  };
}
export function updateAgent(agentId, userObj) {
  return async (dispatch, state) => {
    dispatch(updateAgentRequest());
    try {
      let ref = await fire
        .database()
        .ref(`users/${agentId}`)
        .update(userObj);
      ref = await fire.database().ref(`users/${agentId}`);
      await ref.on(
        "value",
        async function(snapshot) {
          dispatch(updateAgentSuccess(snapshot.val()));
        },
        function(errorObject) {
          throw new Error("Error");
        }
      );
    } catch (e) {
      dispatch(updateAgentFailure("Error in logging in user"));
    }
  };
}
