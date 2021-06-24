import React, { Component } from 'react';
import store from '../store/index';

class Header extends Component {
  render() {
    const { user: { email } } = store.getState();
    // console.log(email);

    return (
      <div>
        <header data-testid="email-field">{ email }</header>

        <p data-testid="total-field">0</p>

        <p data-testid="header-currency-field">BRL</p>

      </div>);
  }
}

export default Header;
