import React, { Component } from "react";
import "./Table.css";

class TableRow extends Component {
  render() {
    return (
      <form>
        <table id="coffeetable">
          <tr className="userInfo">
            <th>
              <input value="name" type="user" className="userForm" />
            </th>
            <th>
              <select className="drinks">
                <option value="soda">Soda</option>
                <option value="coffee">Coffee</option>
                <option value="energy_drink">Energy Drink</option>
                <option value="tea">Tea</option>
              </select>
            </th>
            <th>
              <input value="per cup" type="quantity" className="userForm" />
            </th>
            <th>
              <input value="mg" type="quantity" className="userForm" />
            </th>
          </tr>
        </table>
      </form>
    );
  }
}

export default TableRow;
