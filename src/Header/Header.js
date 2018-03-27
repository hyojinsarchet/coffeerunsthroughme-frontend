import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="title">Coffee Runs Through Me</a>
        <div className="button">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Header;
