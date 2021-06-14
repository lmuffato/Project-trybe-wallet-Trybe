import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Header.css';

function Header(props) {
  const { email } = props;
  return (
    <div className="container">
      <div className="header-bar">
        <h1 className="logo">TrybeWallet</h1>
        <ul className="slider-menu">
          <li data-testid="email-field">{`Email: ${email}`}</li>
          <li>$</li>
          <li data-testid="total-field" id="total-field">0</li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
