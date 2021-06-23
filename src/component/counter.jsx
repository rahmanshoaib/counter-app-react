import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getCounterFormat()}>{this.formatCounter()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getCounterFormat() {
    let classes = "badge m-3 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
