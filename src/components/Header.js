import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <span data-testid="email-field"> Email: </span>
        <span data-testid="total-field"> Total = 0</span>
        <span data-testid="header-currency-field"> $ </span>
      </div>
    );
  }
}
