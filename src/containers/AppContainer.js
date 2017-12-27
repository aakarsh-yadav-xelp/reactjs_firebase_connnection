import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../App";
import { userLogin } from "../actions/user.actions";
import { getAgents } from "../actions/agent.actions";
import { getPayment } from "../actions/payment.actions";
import { getMessage } from "../actions/message.actions";
const mapDispatchToProps = dispatch => {
  return {
    getAgents: () => {
      dispatch(getAgents());
    },
    getPayment: () => {
      dispatch(getPayment());
    },
    getMessage: () => {
      dispatch(getMessage());
    }
  };
};

const AppContainer = withRouter(connect(null, mapDispatchToProps)(App));
export default AppContainer;
