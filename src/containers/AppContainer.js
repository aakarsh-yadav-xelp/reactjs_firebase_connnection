import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../App";
import { getAgents } from "../actions/user.actions";
const mapDispatchToProps = dispatch => {
  return {
    getAgents: () => {
      dispatch(getAgents());
    }
  };
};

const AppContainer = withRouter(connect(null, mapDispatchToProps)(App));
export default AppContainer;
