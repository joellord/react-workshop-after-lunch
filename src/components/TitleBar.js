import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TitleBar extends Component {
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
            <button type="button">Login</button>
          </form>
        </div>
      </nav>
    )
  }
}