import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <>
        <p data-testid="email-field">{ email }</p>
        <p>Despesa Total</p>
        <p data-testid="total-field">{ totalExpenses }</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,

});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};
