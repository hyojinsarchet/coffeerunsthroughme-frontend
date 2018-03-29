import React, { Component } from "react";
import "./authentication.css";

class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <h2 className="auth-header">Sign In</h2>
        <form className="authentication">
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="email"
              onChange={this.props.handleUserAuth}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.props.handleUserAuth}
            />
          </div>
          <input
            value="Submit"
            type="submit"
            onClick={this.props.handleLogIn}
          />
        </form>
      </div>
    );
  }
}

export default Signin;
