import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { getEmail, getCurrency, getTotal } = this.props;
    return (
      <header>
        <span data-testid="email-field">{getEmail}</span>
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
  getCurrency: PropTypes.string.isRequired,
  getTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
