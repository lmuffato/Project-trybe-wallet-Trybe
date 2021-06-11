import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <header style={ { width: '100%', height: '50px' } }>
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  total: PropTypes.number.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default Header;
