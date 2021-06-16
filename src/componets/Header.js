import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import './wallet.css';

class Header extends React.Component {
  render() {
    const { userLogin } = this.props;
    // console.log(userLogin);
    return (
      <>
        <span data-testid="email-field">
          Email:
          {userLogin.email}
        </span>
        <span data-testid="total-field">
          Gastos:
          0
        </span>
        <span data-testid="header-currency-field">
          Câmbio:
          BRL
        </span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user });

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userLogin: PropTypes.string,
}.isRequired;
