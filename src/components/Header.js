import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const INITIAL_EXPENSE = 0;
    const currency = 'BRL';
    return (
      <header>
        <span data-testid="email-field">
          {`Email: ${email}`}
        </span>
        <span data-testid="total-field">
          {`Despesa Total: ${INITIAL_EXPENSE} `}
        </span>
        <span data-testid="header-currency-field">
          {currency}
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired, // checar se é isso mesmo!
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
