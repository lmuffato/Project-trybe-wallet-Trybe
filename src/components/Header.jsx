import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { user, totalAmount } = props;
  return (
    <header>
      <strong data-testid="email-field">{user.email}</strong>
      <span data-testid="total-field">{ totalAmount || 0 }</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
  totalAmount: state.wallet.totalAmount,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  totalAmount: PropTypes.number.isRequired,
};
export default connect(mapStateToProps, null)(Header);
