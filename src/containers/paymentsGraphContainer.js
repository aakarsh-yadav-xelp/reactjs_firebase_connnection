import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PaymentsGraph from "../components/PaymentsGraph";
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
    agents: state.agents.agents,
    payments: state.payments.payments
  };
};

const PaymentsGraphContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentsGraph)
);
export default PaymentsGraphContainer;
