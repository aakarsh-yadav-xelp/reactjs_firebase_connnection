import React from "react";
export default class UserDashboard extends React.Component {
  componentDidMount() {
    this.props.getAgents();
  }
  render() {
    return <div> dashboard</div>;
  }
}
