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
          <Link to="/login" className="nav">
            Login
          </Link>

          <Link to="/signup" className="nav">
            Signup
          </Link>
          <Link to="/main" className="nav">
            Main
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
