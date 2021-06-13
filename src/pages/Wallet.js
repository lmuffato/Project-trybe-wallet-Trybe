import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { getEmail, getCurrency } = this.props;
    const { getPrice } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{getEmail}</span>
          <span data-testid="total-field">
            {getPrice.reduce((acc, { value, exchangeRates, currency }) => {
              const result = exchangeRates[currency].ask;
              return acc + result * value;
            }, 0).toFixed(2)}
          </span>
          <span data-testid="header-currency-field">{getCurrency}</span>
        </header>
        <Form />
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getCurrency: state.wallet.currentCurrency,
  getPrice: state.wallet.expenses,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrency: PropTypes.string.isRequired,
  getPrice: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
