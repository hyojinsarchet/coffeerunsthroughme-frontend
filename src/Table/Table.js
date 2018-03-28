import React, { Component } from "react";
import "./Table.css";
// import axios from "axios";

class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     drinks: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get("https://http://localhost:3001/main").then(response => {
  //     this.setState({
  //       drinks: response.data
  //     });
  //   });
  // }

  render() {
    // let drinks = this.state.drinks.map((drink, index) => {
    return (
      <div>
        <h1>Caffeine Intake</h1>
        <table id="coffeetable">
          <tr className="properties">
            <th>User</th>
            <th>Drink</th>
            <th>Quantity</th>
            <th>Nutritional Value</th>
          </tr>
          <tr className="userinfo">
            <td>user name info here</td>
            <td>
              <select>
                <option value="soda">Soda</option>
                <option value="coffee">Coffee</option>
                <option value="energy_drink">Energy Drink</option>
                <option value="tea">Tea</option>
              </select>
            </td>
            <td>
              <input value="quanitity" type="number" />
            </td>
            <td>is it healthy</td>
          </tr>
        </table>
        <button>+</button>
      </div>
    );
  }
  // );
  // return <div>{drinks}</div>;
  // }
}

export default Table;
