import React from "react";
import PropTypes from "prop-types";
import "./css/input.css";
export default class Input extends React.Component {
  onChange(val) {
    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }
  render() {
    return (
      <input
        type="text"
        className="Input"
        placeholder={this.props.placeholder}
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          backgroundColor: this.props.backgroundColor,
          color: this.props.color,
          fontSize: `${this.props.fontSize}px`
        }}
        onChange={val => this.onChange(val.target.value)}
      />
    );
  }
}
Input.defaultProps = {
  width: 200,
  height: 40,
  backgroundColor: "#fff",
  placeholder: ""
};
