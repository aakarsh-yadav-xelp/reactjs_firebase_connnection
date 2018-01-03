import { connect } from "react-redux";
import { Redirect } from "react-router";
import React from "react";
import { verifyUser } from "../actions/user.actions.js";

const mapDispatchToProps = dispatch => {
  return {
    verifyUserIsLoggedIn: () => {
      dispatch(verifyUser());
    }
  };
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    status: state.user.status
  };
};

export class IsLoggedIn extends React.Component {
  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.verifyUserIsLoggedIn();
    }
  }
  render() {
    return this.props.isLoggedIn ? (
      <Redirect to="/agents" />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const IsLoggedInContainer = connect(mapStateToProps, mapDispatchToProps)(
  IsLoggedIn
);
export default IsLoggedInContainer;
