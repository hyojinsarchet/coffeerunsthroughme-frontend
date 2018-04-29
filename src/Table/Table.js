import React, { Component } from "react";
import "./Table.css";
import TableRow from "../Table/TableRow";
import TableProperties from "./TableProperties";

class Table extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.email}'s Daily Caffeine Intake. </h1>

        <TableProperties />
        {this.props.drinks.map((drink, index) => {
          return (
            <TableRow
              key={index}
              index={index}
              drink={drink}
              handleChange={this.props.editDrinks(index)}
              deleteField={this.props.deleteField}
              onSubmitEdit={this.props.onSubmitEdit}
              saved={true}
            />
          );
        })}
        <TableRow
          drink={this.props.drink}
          handleChange={this.props.handleChange}
          onSubmit={this.props.onSubmit}
          saved={false}
        />
      </div>
    );
  }
}

export default Table;
