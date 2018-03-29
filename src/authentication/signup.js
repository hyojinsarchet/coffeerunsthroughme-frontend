import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label htmlFor="email">Username</label>
            <input type="text" name="email" onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              onChange={this.props.handleInput}
            />
          </div>
          <input
            value="Submit"
            type="submit"
            onClick={this.props.handleSignUp}
          />
        </form>
      </div>
    );
  }
}

export default Signup;
