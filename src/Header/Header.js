import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Coffee Runs Through Me</h1>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    );
  }
}

export default Header;
