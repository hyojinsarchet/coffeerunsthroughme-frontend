import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    let nav = [
      <Link key={2} to="/" className="logo">
        Coffee Runs Through Me
      </Link>
    ];
    if (this.props.isLoggedIn) {
      nav.push(
        <div className="header">
          <Link key={2} to="/" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link key={3} to="/main" className="nav">
            Test
          </Link>
          <Link key={4} to="/logout" className="nav">
            Logout
          </Link>
        </div>,
        console.log(nav)
      );
    } else {
      nav.push(
        <div className="header">
          <Link key={5} to="/login" className="nav">
            Login
          </Link>
          <Link key={6} to="/signup" className="nav">
            Signup
          </Link>
        </div>,
        console.log(nav)
      );
    }
    return <div>{nav}</div>;
  }
}

export default Header;
