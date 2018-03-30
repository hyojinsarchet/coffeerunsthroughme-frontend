import React, { Component } from "react";
import "./Table.css";

class TableRow extends Component {
  render() {
    console.log(this.props.email);
    const tableRow = (
      <table id="coffeetable">
        <tbody>
          <tr className="userInfo">
            <td>
              <label className="userForm">{this.props.email} </label>
            </td>
            <td>
              <select onChange={this.props.handleDrink} className="drinks">
                <option>Default</option>
                <option name="soda" value="soda">
                  Soda
                </option>
                <option name="coffee" value="coffee">
                  Coffee
                </option>
                <option name="energy_drink" value="energy_drink">
                  Energy Drink
                </option>
                <option name="tea" value="tea">
                  Tea
                </option>
              </select>
            </td>
            <td>
              <input
                name="quantity"
                type="number"
                onChange={this.props.onChange}
                className="userForm"
              />
            </td>
            <td>
              <input
                placeholder="mg"
                type="number"
                name="mg"
                className="userForm"
                readOnly={true}
              />
              <input
                value="submit"
                type="submit"
                onClick={this.props.handleCalculation}
                className="new"
              />
              <button
                // onClick={() => {
                //   deleteField()
                // }}
                className="deleteField"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
    return <form>{tableRow}</form>;
  }
}

export default TableRow;
