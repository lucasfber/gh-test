import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    value: 0
  };

  add = () => {
    this.setState((prevState) => ({
      ...this.state,
      value: prevState.value + 1
    }));
  }

  decrement = () => {
    this.setState((prevState) => ({
      ...this.state,
      value: prevState.value - 1
    }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.add}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
