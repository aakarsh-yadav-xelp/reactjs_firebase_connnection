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
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
export default AppContainer;
