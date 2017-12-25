import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import { getAgents } from "../actions/user.actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    agents: state.agents.agents,
    payments: state.payments.payments
  };
};

const UserDashboardContainer = withRouter(
  connect(mapStateToProps)(UserDashboard)
);
export default UserDashboardContainer;
