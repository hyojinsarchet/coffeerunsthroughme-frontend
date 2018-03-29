import React, { Component } from "react";
import "./Table.css";
import TableRow from "../Table/TableRow";
import TableProperties from "./TableProperties";
// import axios from "axios";

class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     drinks: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get("https://http://localhost:3001/main").then(response => {
  //     this.setState({
  //       drinks: response.data
  //     });
  //   });
  // }

  render() {
    // let drinks = this.state.drinks.map((drink, index) => {
    return (
      <div>
        <h1>Caffeine Intake.</h1>
        <TableProperties />
        <TableRow />
        <button onClick="addField()" className="addField">
          + create new
        </button>
      </div>
    );
  }
  // );
  // return <div>{drinks}</div>;
  // }
}

export default Table;
