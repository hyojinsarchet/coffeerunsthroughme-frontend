import React, { Component } from "react";
import "./Table.css";
import TableRow from "../Table/TableRow";
import TableProperties from "./TableProperties";

class Table extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.email} Daily Caffeine Intake.</h1>
        <button onClick={this.props.iterator} className="create new">
          + create new
        </button>
        <TableProperties />
        {this.props.number.map(index => {
          return (
            <TableRow
              email={this.props.email}
              quantity={this.props.quantity}
              onChange={this.props.onChange}
              handleDrink={this.props.handleDrink}
              calculations={this.props.calculations}
              handleCalculation={this.props.handleCalculation}
            />
          );
        })}
      </div>
    );
  }
}

export default Table;
