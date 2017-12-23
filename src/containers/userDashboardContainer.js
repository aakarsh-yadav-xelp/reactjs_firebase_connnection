import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import { getAgents } from "../actions/user.actions";

const mapStateToProps = state => {
  return {
    agents: state.user.agents
  };
};

const UserDashboardContainer = withRouter(
  connect(mapStateToProps)(UserDashboard)
);
export default UserDashboardContainer;
