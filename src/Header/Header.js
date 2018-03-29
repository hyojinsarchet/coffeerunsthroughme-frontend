import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    let nav = [];
    if (this.props.isLoggedIn) {
      nav.push(
        <div key={1}>
<<<<<<< HEAD
          <Link key={2} to="/" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link key={3} to="/main" className="nav">
            Main
=======
          <Link to="/main" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link to="/main" className="nav">
            Test
>>>>>>> 86a33302b674ddd22c80af5a97e30c024ebd2811
          </Link>
          <Link to="/logout" className="nav">
            Logout
          </Link>
        </div>
      );
    } else {
      nav.push(
        <div key={2}>
          <Link to="/" className="logo">
            Coffee Runs Through Me
          </Link>
          <Link to="/login" className="nav">
            Login
          </Link>
          <Link to="/signup" className="nav">
            Signup
          </Link>
        </div>
      );
    }
    return <div className="header">{nav}</div>;
  }
}

export default Header;
