import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import LoginContainer from "./containers/loginContainer";
import UserDashboardContainer from "./containers/userDashboardContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/agents" component={UserDashboardContainer} />
      </div>
    );
  }
}

export default App;
