import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h3>Email:</h3>
        <span data-testid="email-field">{email}</span>
        <h3>total de gastos: R$ </h3>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.object,
}.isrequired;

const mapStateToPros = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToPros, null)(Header);
