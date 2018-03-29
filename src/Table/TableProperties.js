import React, { Component } from "react";
import "./Table.css";

class TableProperties extends Component {
  render() {
    return (
      <table id="coffeetable">
        <tr className="properties">
          <th>User</th>
          <th>Drink</th>
          <th>Quantity</th>
          <th>Calulations</th>
        </tr>
      </table>
    );
  }
}

export default TableProperties;
