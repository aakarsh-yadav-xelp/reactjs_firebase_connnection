import React from "react";
import PropTypes from "prop-types";
import "./css/button.css";
export default class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <input
          type="submit"
          value={this.props.label}
          className="Button-input"
          onClick={() => this.props.onClick()}
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundColor: this.props.backgroundColor,
            color: this.props.color,
            fontSize: `${this.props.fontSize}px`
          }}
        />
      </div>
    );
  }
}
Button.defaultProps = {
  width: 100,
  height: 40,
  backgroundColor: "#1d671c",
  color: "#fff",
  label: "Submit",
  fontSize: 14
};
