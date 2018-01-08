import { connect } from "react-redux";
import { Redirect } from "react-router";
import React from "react";
import { logOutUser } from "../actions/user.actions.js";

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => {
      dispatch(logOutUser());
    }
  };
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    status: state.user.status
  };
};

export class LogOut extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.logOutUser();
    }
  }
  render() {
    return this.props.isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(LogOut);
export default LogoutContainer;
