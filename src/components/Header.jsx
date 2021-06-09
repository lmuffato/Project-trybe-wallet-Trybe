import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total = 0 } = this.props;
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { total } }) => ({
  email,
  total,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;
