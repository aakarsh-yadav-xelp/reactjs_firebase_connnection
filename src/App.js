import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import IsLoggedIn from "./components/IsLoggedIn";
import LoginContainer from "./containers/loginContainer";
import UserDashboardContainer from "./containers/userDashboardContainer";
import PaymentsContainer from "./containers/paymentsContainer";
import AgentContainer from "./containers/agentContainer";
import ClientContainer from "./containers/clientContainer";
import ClientPaymentContainer from "./containers/clientPaymentContainer";
import AllClientsContainer from "./containers/allClientsContainer";
import PaymentsGraphContainer from "./containers/paymentsGraphContainer";
import CreateAgentContainer from "./containers/createAgentContainer";
import "./App.css";
import ChatBox from "./components/ChatBox.js";
class App extends Component {
  componentDidMount() {
    this.props.getAgents();
    this.props.getPayment();
    this.props.getMessage();
  }
  render() {
    let messages = [
      { from: "aakarsh ", message: "Hiii....." },
      {
        from: "aakarsh",
        message: "Hellooooo"
      },
      {
        from: "aaku",
        message:
          "In essence, we can utilize the :before and :after pseudo-elements to create many different effects. For example, a thought bubble can be created with two content items rounded into circles:"
      },
      {
        from: "aaku",
        message:
          "In essence, we can utilize the :before and :after pseudo-elements to create many different effects. For example, a thought bubble can be created with two content items rounded into circles:"
      }
    ];
    return (
      <div
        className="App"
        style={{
          minHeight: `${window.innerHeight || document.body.clientHeight}px`
        }}
      >
        <ChatBox messages={messages} />
      </div>
    );
  }
}

export default App;
