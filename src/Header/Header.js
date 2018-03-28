import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="logo">
            <a href="/">Coffee Runs Through Me</a>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
