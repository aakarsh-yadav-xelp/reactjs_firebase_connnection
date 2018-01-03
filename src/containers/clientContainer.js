import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ClientDashboard from "../components/clientDashboard";
import { updateAgent } from "../actions/agent.actions";
const mapDispatchToProps = dispatch => {
  return {
    onEdit: (agentId, agent) => {
      dispatch(updateAgent(agentId, agent));
    }
  };
};
const mapStateToProps = state => {
  return {
    agents: state.agents.agents
  };
};

const agentContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClientDashboard)
);
export default agentContainer;
