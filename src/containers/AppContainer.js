import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../App";
import { getAgents, getPayment, getMessage } from "../actions/user.actions";
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
