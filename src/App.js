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
import LogoutContainer from "./containers/logoutContainer";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getAgents();
    this.props.getPayment();
    this.props.getMessage();
  }
  render() {
    return (
      <div
        className="App"
        style={{
          minHeight: `${window.innerHeight || document.body.clientHeight}px`
        }}
      >
        <Route path="/login" component={LoginContainer} />
        <Route path="/logout" component={LogoutContainer} />
        <Route
          path="/signUp"
          render={() => {
            return <h1>signUp is comming soon</h1>;
          }}
        />

        <Route exact path="/" component={Home} />
        <Route exact path="/createagent" component={CreateAgentContainer} />
        <Route exact path="/agents" component={UserDashboardContainer} />
        <Route exact path="/allClients" component={AllClientsContainer} />
        <Route exact path="/payment" component={PaymentsContainer} />
        <Route
          exact
          path="/payment/:clientId"
          component={ClientPaymentContainer}
        />
        <Route exact path="/home" component={Home} />
        <Route exact path="/paymentgraph" component={PaymentsGraphContainer} />
        <Route exact path="/agents/:agentId" component={AgentContainer} />
        <Route
          exact
          path="/agents/client/:subAgentId"
          component={ClientContainer}
        />
        <IsLoggedIn />
      </div>
    );
  }
}

export default App;
