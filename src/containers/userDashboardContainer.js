import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import { getAgents } from "../actions/user.actions";
import { updateAgent } from "../actions/agent.actions";
const mapDispatchToProps = dispatch => {
  return {
    onDelete: agentId => {
      dispatch(updateAgent(agentId));
    }
  };
};
const mapStateToProps = state => {
  return {
    agents: state.agents.agents,
    payments: state.payments.payments
  };
};

const UserDashboardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
);
export default UserDashboardContainer;
