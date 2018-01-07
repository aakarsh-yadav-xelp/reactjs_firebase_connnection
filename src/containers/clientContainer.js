import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ClientDashboard from "../components/clientDashboard";
import { updateAgent } from "../actions/agent.actions";
import { verifyPassword, onCloseEdit } from "../actions/user.actions";
const mapDispatchToProps = dispatch => {
  return {
    onEdit: (agentId, agent) => {
      delete agent.edit;
      delete agent.password;
      dispatch(updateAgent(agentId, agent));
    },
    onVerifyPassword: password => {
      dispatch(verifyPassword(password));
    },
    onCloseEdit: () => {
      dispatch(onCloseEdit());
    }
  };
};
const mapStateToProps = state => {
  return {
    user: state.user,
    agents: state.agents.agents
  };
};

const agentContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClientDashboard)
);
export default agentContainer;
