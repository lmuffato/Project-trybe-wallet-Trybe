import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailState } = this.props;
    const TOTAL_VALUE = 0;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          { emailState }
        </p>
        <p data-testid="total-field">
          Despesa total:
          { TOTAL_VALUE }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
};

const mapStateProps = (state) => ({
  emailState: state.user.email,
});

export default connect(mapStateProps, null)(Header);
