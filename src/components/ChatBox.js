import React from "react";
import PropTypes from "prop-types";
import "./css/ChatBox.css";
export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  renderMessageContainer() {
    return (
      <div className="ChatBox-messageContainer">
        {this.props.messages &&
          this.props.messages.map((message, index) => (
            <div className="ChatBox-message" key={index}>
              {message.message}
            </div>
          ))}
      </div>
    );
  }
  render() {
    return (
      <div className="ChatBox">
        <div
          className="ChatBox-header"
          onClick={() =>
            this.setState(prevState => ({
              isOpen: !prevState.isOpen
            }))}
        >
          Messages {this.state.isOpen && <div className="ChatBox-close" />}
        </div>
        {this.state.isOpen ? this.renderMessageContainer() : ""}
      </div>
    );
  }
}
ChatBox.propTypes = {
  messages: PropTypes.shape({
    from: PropTypes.string,
    message: PropTypes.string
  })
};
