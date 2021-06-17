import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">Despesas: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = ({
  email: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Header);
