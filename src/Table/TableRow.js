import React, { Component } from "react";
import "./Table.css";

class TableRow extends Component {
  render() {
    const tableRow = (
      <table id="coffeetable">
        <tbody>
          <tr className="userInfo">
            <td>
              <select
                className="drinks"
                name="drinkType"
                onChange={this.props.onChange}
                value={this.props.drink.drinkType}
              >
                <option value="soda">Soda</option>
                <option value="coffee">Coffee</option>
                <option value="energy_drink">Energy Drink</option>
                <option value="tea">Tea</option>
              </select>
            </td>
            <td>
              <input
                value={this.props.drink.quantity}
                name="quantity"
                placeholder="cup"
                type="number"
                onChange={this.props.onChange}
                className="userForm"
              />{" "}
              cup
            </td>
            <td>
              <input
                value={this.props.drink.calculation}
                type="number"
                name="mg"
                className="userForm"
                readOnly={true}
              />{" "}
              mg
              {this.props.saved === false ? (
                <input value="submit" type="submit" className="new" />
              ) : (
                <button className="new" type="submit">
                  edit
                </button>
              )}
              <button
                onClick={() => {
                  /*deleteField()*/
                }}
                className="deleteField"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
    return (
      <form
        onSubmit={
          this.props.saved === false
            ? this.props.onSubmit
            : this.props.editDrinks(this.props.index)
        }
      >
        {tableRow}
      </form>
    );
  }
}

export default TableRow;
