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
        id: 0,
        quantity: 0,
        drinkType: "Soda",
        calculation: 0
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
    this.deleteField = this.deleteField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://coffeerunsthroughme.herokuapp.com/main")
      .then(response => {
        const listOfDrinks = this.state.drinks.slice();

        for (var i = 0; i < response.data.length; i++) {
          const newDrink = {
            id: response.data[i]._id,
            quantity: response.data[i].quantity,
            drinkType: response.data[i].drinkType,
            calculation: this.convertCaffeine(
              response.data[i].drinkType,
              response.data[i].quantity
            )
          };
          listOfDrinks.push(newDrink);
        }
        this.setState({
          drinks: listOfDrinks
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

  handleChange(e) {
    this.setState({
      drink: {
        ...this.state.drink,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmitEdit(index) {
    return e => {
      e.preventDefault();
      const drinkId = this.state.drinks[index].id;
      console.log(drinkId);
      axios
        .put(`https://coffeerunsthroughme.herokuapp.com/main/${drinkId}`, {
          ...this.state.drinks[index]
        })
        .then(res => {
          console.log(res);
        });
    };
  }

  convertCaffeine(drinkType, quantity) {
    let caffeineAmount = 0;
    if (drinkType === "Coffee") {
      caffeineAmount = this.state.beverage.coffee;
    } else if (drinkType === "Soda") {
      caffeineAmount = this.state.beverage.soda;
    } else if (drinkType === "Tea") {
      caffeineAmount = this.state.beverage.tea;
    } else if (drinkType === "EnergyDrink") {
      caffeineAmount = this.state.beverage.energy_drink;
    }
    return caffeineAmount * quantity;
  }

  editDrinks(index) {
    return e => {
      e.preventDefault();
      const drinkToUpdate = this.state.drinks[index];
      drinkToUpdate[e.target.name] = e.target.value;
      drinkToUpdate.calculation = this.convertCaffeine(
        drinkToUpdate.drinkType,
        drinkToUpdate.quantity
      );
      console.log(drinkToUpdate);
      this.forceUpdate();
    };
  }

  deleteField(index, drink) {
    const drinkId = this.state.drinks[index].id;
    console.log(drinkId);
    axios
      .delete(`https://coffeerunsthroughme.herokuapp.com/main/${drinkId}`)
      .then(res => {
        const deleteRow = [...this.state.drinks];
        deleteRow.splice(index, 1);
        this.setState({ drinks: deleteRow });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting");
    const newDrinks = this.state.drinks.slice();
    console.log(this.state.drink);
    var newDrinkState = { ...this.state.drink };
    newDrinkState.calculation = this.convertCaffeine(
      this.state.drink.drinkType,
      this.state.drink.quantity
    );
    console.log("NewDrinkState: " + JSON.stringify(newDrinkState));
    axios
      .post("https://coffeerunsthroughme.herokuapp.com/main", newDrinkState)
      .then(res => {
        newDrinkState.id = res._id;
        console.log("Before: " + this.state.drinks.length);
        newDrinks.push(newDrinkState);
        this.setState({
          ...this.state,
          drinks: newDrinks,
          drink: {
            id: 0,
            quantity: 0,
            drinkType: "Soda",
            calculation: 0
          }
        });
        console.log("After: " + this.state.drinks.length);
      })
      .catch(err => console.log(err));
    console.log("Submitted");
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("https://coffeerunsthroughme.herokuapp.com/users/signup", {
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
      .post("https://coffeerunsthroughme.herokuapp.com/users/login", {
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
                if (this.state.isLoggedIn === true) {
                  return (
                    <Table
                      drinks={this.state.drinks}
                      email={this.state.email}
                      drink={this.state.drink}
                      isLoggedIn={this.state.isLoggedIn}
                      handleChange={this.handleChange}
                      editDrinks={this.editDrinks}
                      onSubmit={this.handleSubmit}
                      deleteField={this.deleteField}
                      onSubmitEdit={this.onSubmitEdit}
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
