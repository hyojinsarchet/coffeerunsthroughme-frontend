import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import "./App.css";
import axios from "axios";
import Signup from "../authentication/signup.js";
import Signout from "../authentication/signout.js";
import Signin from "../authentication/signin.js";
import Funfact from "../Funfact/Funfact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      drink: [],
      quantity: "",
      drinks: "",
      calculations: "",
      number: [1],
      isLoggedIn: false
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleUserAuth = this.handleUserAuth.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDrink = this.handleDrink.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
    this.iterator = this.iterator.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    axios.get("http://localhost:3001/main").then(response => {
      console.log(response.data);
      this.setState({
        drink: response.data
      });
    });
  }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });

    localStorage.clear();
  }

  handleUserAuth(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDrink(e) {
    e.preventDefault();
    let drink = e.target.value;
    this.setState({
      drinks: drink
    });
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleCalculation(e) {
    e.preventDefault();
    let drink = this.state.drinks;
    console.log(drink);
    if (drink === "coffee") {
      this.setState({
        calculations: 95 * this.state.quantity
      });
    } else if (drink === "soda") {
      this.setState({
        calculations: 45 * this.state.quantity
      });
    } else if (drink === "tea") {
      this.setState({
        calculations: 45 * this.state.quantity
      });
    } else if (drink === "energy_drink") {
      this.setState({
        calculations: 80 * this.state.quantity
      });
    }
    axios.put(`http://localhost:3001/main/`);
  }

  iterator(e) {
    let newelement = 1;
    if (this.state.number.length < 4) {
      this.setState({
        number: this.state.number.concat([newelement])
      });
    }
  }

  render() {
    console.log(this.state.quantity);
    console.log(this.state.calculations);
    return (
      <Switch>
        <div className="app">
          <nav>
            <Header isLoggedIn={this.state.isLoggedIn} />
          </nav>
          <div>
            <Route
              path="/main"
              render={() => {
                if (this.state.isLoggedIn === true) {
                  return (
                    <Table
                      drink={this.state.drink}
                      email={this.state.email}
                      quantity={this.state.quantity}
                      isLoggedIn={this.state.isLoggedIn}
                      calculations={this.state.calculations}
                      onChange={this.handleInput}
                      handleDrink={this.handleDrink}
                      handleCalculation={this.handleCalculation}
                      number={this.state.number}
                      iterator={this.iterator}
                    />
                  );
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              path="/signup"
              render={props => {
                if (this.state.isLoggedIn === false) {
                  return (
                    <Signup
                      {...props}
                      isLoggedIn={this.state.isLoggedIn}
                      handleUserAuth={this.handleUserAuth}
                      handleSignUp={this.handleSignUp}
                    />
                  );
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              path="/funfact"
              render={() => {
                if (this.state.isLoggedIn === true) {
                  return <Funfact />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              path="/logout"
              render={props => {
                if (this.state.isLoggedIn === true) {
                  return (
                    <Signout
                      {...props}
                      isLoggedIn={this.state.isLoggedIn}
                      handleLogOut={this.handleLogOut}
                    />
                  );
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route
              path="/login"
              render={props => {
                if (this.state.isLoggedIn === false) {
                  return (
                    <Signin
                      {...props}
                      isLoggedIn={this.state.isLoggedIn}
                      handleUserAuth={this.handleUserAuth}
                      handleLogIn={this.handleLogIn}
                    />
                  );
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
          </div>
          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
