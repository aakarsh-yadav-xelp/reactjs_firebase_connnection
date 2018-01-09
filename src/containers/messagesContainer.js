import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Messages from "../components/messages";
import { getMessage } from "../actions/message.actions";

const mapStateToProps = state => {
  return {
    messages: state.messages.messages
  };
};

const messagesContainer = withRouter(connect(mapStateToProps)(Messages));

export default messagesContainer;
