import React, { Component } from "react";
import "./Table.css";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.drink
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

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
                onChange={this.handleChange}
                value={this.state.drinkType}
              >
                <option value="Soda">Soda</option>
                <option value="Coffee">Coffee</option>
                <option value="EnergyDrink">Energy Drink</option>
                <option value="Tea">Tea</option>
              </select>
            </td>
            <td>
              <input
                value={this.state.quantity}
                name="quantity"
                placeholder="cup"
                type="number"
                onChange={this.handleChange}
                className="userForm"
              />
              cup
            </td>
            <td>
              <input
                value={this.state.calculation}
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
            : e => {
                e.preventDefault();
                this.props.submitEdit(this.state);
              }
        }
      >
        {tableRow}
      </form>
    );
  }
}

export default TableRow;
