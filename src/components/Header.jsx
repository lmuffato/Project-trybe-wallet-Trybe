import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Header.css';

function Header(props) {
  const { email } = props;
  return (
    <header>
      <h1>TrybeWallet</h1>
      <span data-testid="email-field">{ email }</span>
      <div className="total">
        $
        <span data-testid="total-field"> 0 </span>
        <span data-testid="header-currency-field"> BRL </span>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
