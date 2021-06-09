import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getEmail, getCurrency } = this.props;
    return (
      <header>
        <span data-testid="email-field">{getEmail}</span>
        <span data-testid="total-field">{0}</span>
        <span data-testid="header-currency-field">{getCurrency}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getCurrency: state.wallet.currentCurrency,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
