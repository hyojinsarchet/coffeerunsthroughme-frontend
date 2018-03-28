import React, { Component } from "react";
import TableList from "../TableList/TableList";
import "./Table.css";

class Table extends Component {
  render() {
    return (
      <div>
        {/* <h1>Caffeine Intake</h1>
        <div className="property-row">
          <span>User</span>
          <span>Drink</span>
          <span>Quantity</span>
          <hr /> */}
        <TableList />
      </div>
      // </div>
    );
  }
}

export default Table;
