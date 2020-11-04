import React from "react";
import ReactDom from "ReactDom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    return (
      <button> checkout </button>
    )
  }
}


class F1 extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleNext = this.handleNext.bind(this);
  };
  render(){
    const { name, email, password } = this.state;
    return (
      <form class="F1">
        <h2> Sign Up </h2>
        <label>Name: </label><input type="text">
        <label>Email: </label><input type="email">
        <label>Password: </label><input type="password">
        <input type="submit" value="Next"/>
      </form>
    )
  }
}

  class F1 extends React.Component {{
  super()
  this.state = {
    street: "",
    city: "",
    state: "",
    zipcode: ""
  };
  this.handleNext = this.handleNext.bind(this);
};
render(){
  const { street, city, state, zipcode } = this.state;
  return (
    <form id="F2">
      <h2> Adress </h2>
      <label>Street: </label><input type="text">
      <label>City: </label><input type="email">
      <label>State: </label><input type="password">
      <label>Zip Code: </label><input type="text">
      <input type="submit" value="Next"/>
    </form>
)
}
}



class F3 extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handlePurchase = this.handlePurchase.bind(this);
  };
  render(){
    const { creditcard #, expirydate, cvv, billing zip code } = this.state;
    return (
      <form id="F3">
        <h2> Payment details </h2>
        <label>Credit card #: </label><input type="text">
        <label>Expiry date: </label><input type="date">
        <label>CVV: </label><input type="number">
        <label>Billing zip code: </label><input type="number">
        <input type="submit" value="Purchase"/>
      </form>
    )
  }
}

ReactDom.render(App, document.getElementById("app"));
export default App, F1, F2, F3;
