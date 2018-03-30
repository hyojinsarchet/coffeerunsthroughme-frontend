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
                onChange={this.props.handleChange}
                value={this.props.drink.drinkType}
              >
                <option value="Soda">Soda</option>
                <option value="Coffee">Coffee</option>
                <option value="EnergyDrink">Energy Drink</option>
                <option value="Tea">Tea</option>
              </select>
            </td>
            <td>
              <input
                value={this.props.drink.quantity}
                name="quantity"
                placeholder="cup"
                type="number"
                onChange={this.props.handleChange}
                className="userForm"
              />
              cup
            </td>
            <td>
              <input
                defaultValue={this.props.drink.calculation}
                type="number"
                name="mg"
                placeholder="mg"
                className="userForm"
                readOnly={true}
              />
              mg
              {this.props.saved === false ? (
                <input value="submit" type="submit" className="new" />
              ) : (
                <button className="new" type="submit">
                  submit change
                </button>
              )}
              <button
                onClick={() => {
                  this.props.deleteField(this.props.index);
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
            : this.props.onSubmitEdit(this.props.index)
        }
      >
        {tableRow}
      </form>
    );
  }
}

export default TableRow;
