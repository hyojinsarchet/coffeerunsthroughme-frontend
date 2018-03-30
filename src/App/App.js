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
      drinks: [],
      drink: {
        quantity: "",
        drinkType: "soda",
        calculation: ""
      },
      beverage: {
        coffee: 95,
        tea: 45,
        soda: 45,
        energy_drink: 80
      },
      isLoggedIn: false
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleUserAuth = this.handleUserAuth.bind(this);
    this.convertCaffeine = this.convertCaffeine.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editDrinks = this.editDrinks.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteField = this.deleteField.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
    axios.get("http://localhost:3001/main").then(response => {
      console.log(response.data);
      this.setState({
        drinks: response.data
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

  handleInput(e) {
    this.setState({
      drink: {
        ...this.state.drink,
        [e.target.name]: e.target.value
      }
    });
  }

  convertCaffeine(drinkType, quantity) {
    let caffeineAmount = 0;
    if (drinkType === "coffee") {
      caffeineAmount = this.state.beverage.coffee;
    } else if (drinkType === "soda") {
      caffeineAmount = this.state.beverage.soda;
    } else if (drinkType === "tea") {
      caffeineAmount = this.state.beverage.tea;
    } else if (drinkType === "energy_drink") {
      caffeineAmount = this.state.beverage.energy_drink;
    }
    return caffeineAmount * quantity;
  }

  editDrinks(index) {
    return e => {
      e.preventDefault();

      const drinkToUpdate = this.state.drinks[index];

      console.log("Before edit: " + drinkToUpdate);
      drinkToUpdate[e.target.name] = e.target.value;

      drinkToUpdate.calculation = this.convertCaffeine(
        drinkToUpdate.drinkType,
        drinkToUpdate.quantity
      );
      console.log("After edit: " + drinkToUpdate);
      this.forceUpdate();
    };
  }

  deleteField(index, e) {
    axios.delete("http://localhost:3001/main/").then(res => {
      const deleteRow = [...this.state.drinks];
      deleteRow.splice(index, 1);
      this.setState({ drinks: deleteRow });
    });
    console.log("this has been deleted");
  }

  handleSubmit(e) {
    e.preventDefault();
    const newDrinks = this.state.drinks.slice();
    var newDrinkState = { ...this.state.drink };
    newDrinkState.calculation = this.convertCaffeine(
      this.state.drink.drinkType,
      this.state.drink.quantity
    );

    newDrinks.push(newDrinkState);

    this.setState({
      ...this.state,
      drinks: newDrinks
    });

    this.setState({
      drink: {
        quantity: "",
        drinkType: "soda",
        calculation: ""
      }
    });

    //save to the db
    //axios.post
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

  submitEdit(e) {
    e.preventDefault();
    // method for update list to db
    // axios.post()/put;
  }

  render() {
    this.handlePost;
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
                    email={this.state.email}
                    drink={this.state.drink}
                    isLoggedIn={this.state.isLoggedIn}
                    onChange={this.handleInput}
                    editDrinks={this.editDrinks}
                    submitEdit={this.submitEdit}
                    onSubmit={this.handleSubmit}
                    deleteField={this.deleteField}
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
