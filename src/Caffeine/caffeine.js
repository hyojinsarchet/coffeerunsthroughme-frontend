import React, { Component } from "react";
import axios from "axios";

class Caffeine extends Component {
  handleCaffeine(e) {
    if (e.target.value === "coffee") {
      return;
    }
  }
  render() {
    console.log(this.props.email);
    return <div> hello </div>;
  }
}

export default Caffeine;
