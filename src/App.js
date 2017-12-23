import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import LoginContainer from "./containers/loginContainer";
import UserDashboardContainer from "./containers/userDashboardContainer";
import AgentContainer from "./containers/agentContainer";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getAgents();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route exact path="/agents" component={UserDashboardContainer} />
        <Route path="/agents/:agentId/:subAgentId" component={AgentContainer} />
      </div>
    );
  }
}

export default App;
