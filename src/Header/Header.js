import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Switch>
            <Link to="/" className="logo">
              Coffee Runs Through Me
            </Link>
            <Link to="/main" />
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Header;
