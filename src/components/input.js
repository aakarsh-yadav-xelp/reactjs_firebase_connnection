import React from "react";
import "./css/input.css";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : ""
    };
  }
  onChange(value) {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  render() {
    return (
      <input
        type={this.props.type}
        className="Input"
        placeholder={this.props.placeholder}
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          backgroundColor: this.props.backgroundColor,
          color: this.props.color,
          fontSize: `${this.props.fontSize}px`
        }}
        value={this.props.value ? this.props.value : ""}
        onChange={val => this.onChange(val.target.value)}
      />
    );
  }
}
Input.defaultProps = {
  type: "text",
  width: 200,
  height: 40,
  backgroundColor: "#fff",
  placeholder: "",
  value: ""
};
