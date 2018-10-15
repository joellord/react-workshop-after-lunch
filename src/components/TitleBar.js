import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/Auth";
import store from "../utils/Store";

export default class TitleBar extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    store.subscribe(this.updateState);
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateState);
  }

  updateState() {
    this.setState(store.getGlobalState());
  }

  logout() {
    let auth = new Auth();
    auth.logout();
  }

  login() {
    let auth = new Auth();
    auth.login();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Weather</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="nav-link">Weather</Link>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            {!this.state.isLoggedIn &&
            <button type="button" onClick={this.login}>Login</button>
            }
            {this.state.isLoggedIn &&
            <button type="button" onClick={this.logout} className="btn btn-danger">Logout</button>
            }
          </form>
        </div>
      </nav>
    )
  }
}