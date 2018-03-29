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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      drinks: [],
      drink: {
        email: "",
        quantity: "",
        coffee: 95,
        tea: 45,
        soda: 45,
        energy_drink: 80
      },
      isLoggedIn: false
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  // componentDidMount() {
  //   if (localStorage.token) {
  //     this.setState({
  //       isLoggedIn: true
  //     });
  //   } else {
  //     this.setState({
  //       isLoggedIn: false
  //     });
  //   }
  //   axios.get("https://http://localhost:3001/main").then(response => {
  //     this.setState({
  //       drinks: response.data
  //     });
  //   });
  // }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });

    localStorage.clear();
  }

  handleInput(e) {
    this.setState({
      ...this.state,
      drink: {
        [e.target.name]: e.target.value
      }
    });
  }

  // addField(e) {}

  // deleteField(e) {
  //   const users =[...this.state.email]
  //   email.slice(index, 1)
  //   this.setState({users})
  // }

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
    console.log(e.target);

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

  caffeine(e) {
    let drink = e.target.value;
    console.log(drink);
    if (drink === "coffee") {
      return this.state.drink.coffee * this.state.drink.quantity;
    } else if (drink === "soda") {
      return this.state.drink.soda * this.state.drink.quantity;
    } else if (drink === "tea") {
      return this.state.tea * this.state.drink.quantity;
    } else if (drink === "energy_drink") {
      return this.state.energy_drink * this.state.drink.quantity;
    }
  }

  render() {
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
                return (
                  <Table
                    drinks={this.state.drinks}
                    email={this.state.drink.email}
                    quantity={this.state.drink.quantity}
                    isLoggedIn={this.state.isLoggedIn}
                    onChange={this.handleInput}
                  />
                );
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
                      handleInput={this.handleInput}
                      handleSignUp={this.handleSignUp}
                    />
                  );
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
                      handleInput={this.handleInput}
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
