import React, { Component } from "react";
import "./Table.css";
import TableRow from "../Table/TableRow";
import TableProperties from "./TableProperties";

class Table extends Component {
  render() {
    return (
      <div>
        <h1>Daily Caffeine Intake.</h1>
        <button
          onClick={() => {
            /*addField()*/
          }}
          className="create new"
        >
          + create new
        </button>
        <TableProperties />
        {this.props.drinks.map((drink, index) => {
          return (
            <TableRow
              email={this.props.email}
              quantity={this.props.quantity}
              onChange={this.props.onChange}
            />
          );
        })}
        <TableRow
          email={this.props.email}
          quantity={this.props.quantity}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Table;
