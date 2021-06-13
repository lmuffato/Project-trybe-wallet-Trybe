import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forms from '../components/Forms';
// import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email, totalDespesas } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            Email:
            {email}
          </div>
          <div data-testid="total-field">
            {totalDespesas
              .map(({ value, currency, exchangeRates }) => Object.values(exchangeRates)
                .filter(({ code }) => code === currency)
                .map(({ ask }) => Number(ask))[0] * value)
              .reduce((acc, curr) => acc + curr, 0)}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <Forms />
        {/* <Table /> */}
      </div>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  totalDespesas: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  totalDespesas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
