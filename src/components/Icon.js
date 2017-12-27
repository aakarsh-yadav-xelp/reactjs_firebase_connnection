import React from "react";
import "./css/Icon.css";
import PropTypes from "prop-types";
export default class Icon extends React.Component {
  render() {
    return (
      <div
        className="Icon-defaultImage"
        style={{
          backgroundImage: `url(${this.props.image})`,
          width: this.props.width,
          height: this.props.height
        }}
      />
    );
  }
}
Icon.defaultProps = {
  height: 40,
  width: 40
};
