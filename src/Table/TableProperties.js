import React, { Component } from "react";
import "./Table.css";

class TableProperties extends Component {
  render() {
    return (
      <table id="coffeetable">
        <tbody>
          <tr className="content">
            <th>Drink</th>
            <th>Quantity</th>
            <th>Calculations</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableProperties;
