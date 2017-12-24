import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import { getAgents } from "../actions/user.actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    agents: state.user.agents,
    payments: state.user.payments,
    messages: state.user.messages
  };
};

const UserDashboardContainer = withRouter(
  connect(mapStateToProps)(UserDashboard)
);
export default UserDashboardContainer;
