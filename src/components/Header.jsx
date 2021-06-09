import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, arrayOf, shape } from 'prop-types';

import { calculoDespesa } from '../utils/funtions';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p>
          <span data-testid="total-field">
            { expenses ? calculoDespesa(expenses) : 0 }
          </span>
        </p>
        <p data-testid="header-currency-field">{`Cambio: ${'BRL'}`}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: string.isRequired,
  expenses: arrayOf(shape({})).isRequired,
};

export default connect(mapStateToProps)(Header);
