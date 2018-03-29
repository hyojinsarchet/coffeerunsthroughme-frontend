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
              <select className="drinks">
                <option value="soda">Soda</option>
                <option value="coffee">Coffee</option>
                <option value="energy_drink">Energy Drink</option>
                <option value="tea">Tea</option>
              </select>
            </td>
            <td>
              <input
                value={this.props.quantity}
                name="quantity"
                placeholder="cup"
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
              <input value="submit" type="submit" className="new" />
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
