import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AgentDashboard from "../components/agentDashboard";

const mapStateToProps = state => {
  return {
    agents: state.agents.agents
  };
};

const agentContainer = withRouter(connect(mapStateToProps)(AgentDashboard));
export default agentContainer;
