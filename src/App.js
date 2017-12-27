import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import LoginContainer from "./containers/loginContainer";
import UserDashboardContainer from "./containers/userDashboardContainer";
import PaymentsContainer from "./containers/paymentsContainer";
import AgentContainer from "./containers/agentContainer";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getAgents();
    this.props.getPayment();
    this.props.getMessage();
  }
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Route path="/login" component={LoginContainer} />
        <Route
          path="/signUp"
          render={() => {
            return <h1>signUp is comming soon</h1>;
          }}
        />

        <Route exact path="/" component={Home} />
        <Route exact path="/agents" component={UserDashboardContainer} />
        <Route exact path="/payment" component={PaymentsContainer} />
        <Route path="/agents/:agentId/:subAgentId" component={AgentContainer} />
      </div>
    );
  }
}

export default App;
