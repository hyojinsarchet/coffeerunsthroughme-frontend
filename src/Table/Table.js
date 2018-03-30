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
<<<<<<< HEAD
        <h1>{this.props.email}'s Daily Caffeine Intake. </h1>

        <TableProperties />
        {this.props.drinks.map((drink, index) => {
          return (
            <TableRow
              key={index}
              index={index}
              drink={drink}
              onChange={this.props.onChange}
              editDrinks={this.props.editDrinks}
              deleteField={this.props.deleteField}
              submitEdit={this.props.submitEdit}
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
=======
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
>>>>>>> Kevin_Table
      </div>
    );
  }
}

export default Table;
