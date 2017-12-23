import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { userLogin } from "../actions/user.actions";
const mapDispatchToProps = dispatch => {
  return {
    login: userObj => {
      dispatch(userLogin(userObj));
    }
  };
};

const LoginContainer = withRouter(connect(null, mapDispatchToProps)(LoginForm));
export default LoginContainer;
