import React, { Component } from "react";
import "./TableList.css";
import axios from "axios";
import Table from "../Table/Table.js";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }

  componentDidMount() {
    axios.get("https://http://localhost:3001/main").then(response => {
      this.setState({
        drinks: response.data
      });
    });
  }

  render() {
    let drinks = this.state.drinks.map((drink, index) => {
      return (
        <div className="table" key={index}>
          <ul>
            <li>user name info here</li>
            <select>
              <option value="soda">Soda</option>
              <option value="coffee">Coffee</option>
              <option value="monster">Monster</option>
              <option value="red_bull">Red Bull</option>
              <option value="tea">Tea</option>
              <input value="quanitity" type="number" />
            </select>
          </ul>
          <Table drinks={drink} />
        </div>
      );
    });
    return <div>{drinks}</div>;
  }
}

export default TableList;
