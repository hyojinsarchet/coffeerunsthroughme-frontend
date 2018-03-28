import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="logo">
            <a href="/">Coffee Runs Through Me</a>
          </h1>
          <Link to="/">Home</Link>
          <Link to="/main" />
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default Header;
