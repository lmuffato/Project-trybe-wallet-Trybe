import React, { Component } from 'react';

export default class Expenses extends Component {
  render() {
    return (
      <label htmlFor="expense">
        Valor
        <input type="number" id="expense" />
      </label>
    );
  }
}
