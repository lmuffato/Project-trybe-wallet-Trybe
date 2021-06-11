import React, { Component } from 'react';
import store from '../store/index';

class Header extends Component {
  render() {
    console.log(store.getState());
    const { user: { email } } = store.getState();
    return (
      <div>
        <header data-testid="email-field">{ email }</header>
        <h5 data-testid="total-field">0</h5>
        <h5 data-testid="header-currency-field">BRL</h5>
      </div>);
  }
}

export default Header;
