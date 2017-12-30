import React from "react";
import classNames from "classnames";
import { SUCCESS, FAILURE } from "../actions/constant.actions";
import "./css/popup.css";
import PropTypes from "prop-types";
export default class Popup extends React.Component {
  render() {
    let ClassNames = classNames("Popup", {
      "Popup-danger": this.props.type === FAILURE,
      "Popup-success": this.props.type === SUCCESS
    });
    return <div className={ClassNames}>{this.props.message}</div>;
  }
}

Popup.propTypes = {
  message: PropTypes.string
};
Popup.defaultProps = {
  message: "Success"
};
