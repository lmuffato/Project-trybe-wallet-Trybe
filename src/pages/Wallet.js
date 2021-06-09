import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getEmail, getCurrency, getTotal } = this.props;
    return (
      <header data-testid="email-field">
        <span>{getEmail}</span>
        <span data-testid="total-field">{Number(getTotal)}</span>
        <span data-testid="header-currency-field">{getCurrency}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getTotal: state.wallet.total,
  getCurrency: state.wallet.currentCurrency,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getTotal: PropTypes.number.isRequired,
  getCurrency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
