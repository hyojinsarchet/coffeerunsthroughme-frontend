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
        <div key={index}>
          <Table drinks={drink} />
        </div>
      );
    });
    return <div>{drinks}</div>;
  }
}

export default TableList;
