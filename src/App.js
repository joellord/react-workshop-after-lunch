import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Weather from "./components/Weather";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";
import TitleBar from "./components/TitleBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App container">
            <TitleBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/weather" component={Weather} />
              <Route path="/callback" component={Callback} />
              <Route path="/unauthorized" component={Unauthorized} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
