import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header style={ { width: '100%', height: '50px' } }>
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

export default Header;
