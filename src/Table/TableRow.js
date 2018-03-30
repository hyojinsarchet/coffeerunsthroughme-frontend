import React, { Component } from "react";
import "./Table.css";

class TableRow extends Component {
  render() {
    const onChangeFunction =
      this.props.saved === false
        ? this.props.onChange
        : this.props.editDrinks(this.props.index);
    const tableRow = (
      <table id="coffeetable">
        <tbody>
          <tr className="userInfo">
            <td>
              <select
                className="drinks"
                name="drinkType"
                onChange={onChangeFunction}
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
                onChange={onChangeFunction}
                className="userForm"
              />
              cup
            </td>
            <td>
              <input
                value={this.props.drink.calculation}
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
            : this.props.submitEdit
        }
      >
        {tableRow}
      </form>
    );
  }
}

export default TableRow;
