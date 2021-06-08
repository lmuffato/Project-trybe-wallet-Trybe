import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { user } = props;
  return (
    <header>
      <strong data-testid="email-field">{user.email}</strong>
      <span data-testid="total-field">0</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};
export default connect(mapStateToProps, null)(Header);
