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
    console.log(this.props.user);
    if (this.props.user && this.props.user.isLoggedIn) {
      this.props.getAgents();
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    console.log(this.props.user);
    return (
      <div className="App">
        <Header {...this.props} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route
          path="/signUp"
          render={() => {
            return <h1>signUp is comming soon</h1>;
          }}
        />
        <Route exact path="/agents" component={UserDashboardContainer} />
        <Route path="/agents/:agentId/:subAgentId" component={AgentContainer} />
      </div>
    );
  }
}

export default App;
