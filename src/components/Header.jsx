import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalPrice } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p>
          Despesas Total:
          <span data-testid="total-field">{totalPrice}</span>
        </p>
        <p data-testid="header-currency-field">{`Cambio: ${'BRL'}`}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalPrice: state.wallet.totalPrice,
});

Header.propTypes = {
  email: string.isRequired,
  totalPrice: number.isRequired,
};

export default connect(mapStateToProps)(Header);
