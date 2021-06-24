import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <h3 data-testid="email-field">
          { email}
          {' '}
        </h3>
        <h3 data-testid="total-field"> 0 </h3>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  // expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
