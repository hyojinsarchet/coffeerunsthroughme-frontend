import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link to="/main">Test</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default Header;
