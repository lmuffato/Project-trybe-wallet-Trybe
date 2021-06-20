import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { email, totalValue = 0 } = props;
  return (
    <header>
      <p data-testid="email-field">{ email }</p>
      <p data-testid="total-field">{ totalValue.toFixed(2) }</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalValue: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
