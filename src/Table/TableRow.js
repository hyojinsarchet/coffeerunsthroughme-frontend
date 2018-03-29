import React, { Component } from "react";
import "./Table.css";

class TableRow extends Component {
  render() {
    console.log(this.props.email);
    return (
      <form>
        <table id="coffeetable">
          <tbody>
            <tr className="userInfo">
              <td>
                <input
                  value={this.props.email}
                  name="email"
                  onChange={this.props.onChange}
                  className="userForm"
                  placeholder="name"
                />
              </td>
              <td>
                <select className="drinks">
                  <option
                    onChange={this.props.caffeine}
                    name="soda"
                    value="soda"
                  >
                    Soda
                  </option>
                  <option onChange={this.props.caffeine} value="coffee">
                    Coffee
                  </option>
                  <option onChange={this.props.caffeine} value="energy_drink">
                    Energy Drink
                  </option>
                  <option onChange={this.props.caffeine} value="tea">
                    Tea
                  </option>
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
                <input placeholder="mg" type="quantity" className="userForm" />
                <input value="submit" type="submit" className="new" />
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
      </form>
    );
  }
}

export default TableRow;
