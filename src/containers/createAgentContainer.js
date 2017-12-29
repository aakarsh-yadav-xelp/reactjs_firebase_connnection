import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateAgent from "../components/createAgent";
import { createAgent } from "../actions/agent.actions";
const mapDispatchToProps = dispatch => {
  return {
    createAgent: agent => {
      console.log(agent);
      dispatch(createAgent(agent));
    }
  };
};
const mapStateToProps = state => {
  return {
    agents: state.agents.agents
  };
};

const agentContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateAgent)
);
export default agentContainer;
