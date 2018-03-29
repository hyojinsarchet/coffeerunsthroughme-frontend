import React, { Component } from "react";
import "./Table.css";
import TableRow from "./TableRow";

class TableProperties extends Component {
  render() {
    return (
      <table id="coffeetable">
        <tbody>
          <tr className="content">
            <th>User</th>
            <th>Drink</th>
            <th>Quantity</th>
            <th>Calulations</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableProperties;
