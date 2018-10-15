import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 jumbotron">
            <h1>Welcome</h1>
            <p>Welcome to the Weather App</p>
          </div>
        </div>
      </div>
    )
  }
}