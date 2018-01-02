import { SUCCESS, REQUEST, FAILURE } from "./constant.actions.js";
import fire from "../dbUtils/db_fire";
export const GET_AGENTS_REQUEST = "GET_AGENTS_request";
export const GET_AGENTS_SUCCESS = "GET_AGENTS_success";
export const GET_AGENTS_FAILURE = "GET_AGENTS_failure";

export const UPDATE_AGENTS_REQUEST = "UPDATE_AGENTS_request";
export const UPDATE_AGENTS_SUCCESS = "UPDATE_AGENTS_success";
export const UPDATE_AGENTS_FAILURE = "UPDATE_AGENTS_failure";

export const CREATE_AGENTS_REQUEST = "CREATE_AGENTS_request";
export const CREATE_AGENTS_SUCCESS = "CREATE_AGENTS_success";
export const CREATE_AGENTS_FAILURE = "CREATE_AGENTS_failure";

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
      let ref = await fire.database().ref("agents");
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
  console.log(agentId, userObj);
  return async (dispatch, state) => {
    dispatch(updateAgentRequest());
    try {
      let ref = await fire
        .database()
        .ref.child(`agents`)
        .where("agents.idNumber", "==", agentId)
        .on("value", data => {
          console.log(data.val());
        });
      // .child("Clients")
      // .where("Clients.IdNumber", "==", userObj.IdNumber)
      // .update(userObj);
      ref = await fire.database().ref(`agents`);
      await ref.on(
        "value",
        async function(snapshot) {
          dispatch(updateAgentSuccess(snapshot.val()));
        },
        function(errorObject) {
          console.log(errorObject);
          throw new Error("Error");
        }
      );
    } catch (e) {
      dispatch(updateAgentFailure("Error in logging in user"));
    }
  };
}

export function createAgentRequest() {
  return {
    type: CREATE_AGENTS_REQUEST,
    status: REQUEST
  };
}
export function createAgentSuccess(agents) {
  return {
    type: CREATE_AGENTS_SUCCESS,
    status: SUCCESS,
    agents
  };
}
export function createAgentFailure(error) {
  return {
    type: CREATE_AGENTS_FAILURE,
    status: FAILURE,
    error
  };
}
export function createAgent(agentObj) {
  return async (dispatch, state) => {
    dispatch(createAgentRequest());
    try {
      let ref = await fire
        .database()
        .ref(`agents`)
        .push(agentObj);
      ref = await fire.database().ref(`agents`);
      await ref.on(
        "value",
        async function(snapshot) {
          dispatch(createAgentSuccess(snapshot.val()));
        },
        function(errorObject) {
          throw new Error("Error");
        }
      );
    } catch (e) {
      dispatch(createAgentFailure("Error in logging in user"));
    }
  };
}
