import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConverter";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Member!");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {

    return (

      <div>

        <h3>{this.state.count}</h3>

        <button onClick={this.increase}>Increment</button>
        <br />

        <button onClick={this.decrement}>Decrement</button>
        <br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>
        <br />

        <button onClick={this.onPress}>
          Click on me
        </button>

        <CurrencyConvertor />

      </div>

    );
  }
}

export default App;