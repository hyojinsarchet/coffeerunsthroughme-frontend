import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Main</Link>
          <Link to="/main">Home</Link>
        </nav>
        <div>
          <Switch>
            <Route path="/" />
            <Route path="/main" />
          </Switch>
        </div>
        <div>
          <Header />
          <Table />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
