import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ClientPaymentDashboard from "../components/clientPaymentDashboard";
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
  connect(mapStateToProps, mapDispatchToProps)(ClientPaymentDashboard)
);
export default agentContainer;
