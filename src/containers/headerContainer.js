import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../components/header";
import { logOutUser } from "../actions/user.actions";
const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => {
      dispatch(logOutUser());
    }
  };
};
const mapStateToProps = state => {
  return {
    agents: state.agents.agents
  };
};

const HeaderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
export default HeaderContainer;
