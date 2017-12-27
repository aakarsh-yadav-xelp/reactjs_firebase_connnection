import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Payment from "../components/payment";
import { getAgents } from "../actions/user.actions";

const mapStateToProps = state => {
  return {
    agents: state.agents.agents,
    payments: state.payments.payments
  };
};

const PaymentsContainer = withRouter(connect(mapStateToProps)(Payment));
export default PaymentsContainer;
