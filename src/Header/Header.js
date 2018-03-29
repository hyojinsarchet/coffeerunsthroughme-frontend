import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    let nav = [];
    if (this.props.isLoggedIn) {
      nav.push(
        <div key={1}>
          <Link key={2} to="/" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link key={3} to="/main" className="nav">
            Main
          </Link>
          <Link key={4} to="/logout" className="nav">
            Logout
          </Link>
        </div>
      );
    } else {
      nav.push(
        <div key={2}>
          <Link key={7} to="/main" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link key={5} to="/login" className="nav">
            Login
          </Link>
          <Link key={6} to="/signup" className="nav">
            Signup
          </Link>
        </div>
      );
    }
    return <div className="header">{nav}</div>;
  }
}

export default Header;
