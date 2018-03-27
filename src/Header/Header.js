import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <a>Coffee Runs Through Me</a>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    );
  }
}

export default Header;
