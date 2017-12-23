import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import { getAgents } from "../actions/user.actions";
const mapDispatchToProps = dispatch => {
  return {
    getAgents: () => {
      dispatch(getAgents());
    }
  };
};
const mapStateToProps = state => {
  return {
    agents: state.agents
  };
};

const UserDashboardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
);
export default UserDashboardContainer;
