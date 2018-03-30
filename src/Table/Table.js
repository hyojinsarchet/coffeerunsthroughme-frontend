import React, { Component } from "react";
import "./Table.css";
import TableRow from "../Table/TableRow";
import TableProperties from "./TableProperties";

class Table extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.email}'s Daily Caffeine Intake. </h1>
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
              key={index}
              index={index}
              drink={drink}
              onChange={this.props.onChange}
              editDrinks={this.props.editDrinks}
              saved={true}
            />
          );
        })}
        <TableRow
          drink={this.props.drink}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          saved={false}
        />
      </div>
    );
  }
}

export default Table;
