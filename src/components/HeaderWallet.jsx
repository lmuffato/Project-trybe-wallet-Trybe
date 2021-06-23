import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  roundNumber(number, precision) {
    const baseDez = 10;
    const decimalDot = baseDez ** precision;
    return Math.round(number * decimalDot) / decimalDot;
  }

  conversionAndSum() {
    const { actualExpenses } = this.props;
    let total = 0;
    const decimalRounds = 4;
    actualExpenses.forEach((ele) => {
      total += (this.roundNumber(ele.value, decimalRounds)
      * this.roundNumber(ele.exchangeRates[ele.currency].ask, decimalRounds));
    });
    return total === 0 ? parseFloat(total).toFixed(0)
      : parseFloat(total).toFixed(2);
  }

  render() {
    const { actualTotalExpenses, actualEmail } = this.props;
    console.log(actualTotalExpenses);
    return (
      <div>
        <header>
          <span>Email: </span>
          <span data-testid="email-field">{actualEmail}</span>
          <span>Total: </span>
          {/* <h1>{this.conversionAndSum()}</h1> */}
          <span>
            <h1 data-testid="total-field">
              { this.conversionAndSum() }
            </h1>
          </span>
          <span>Câmbio: </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualExpenses: state.wallet.expenses,
  actualTotalExpenses: state.wallet2.totalExpenses,
  actualEmail: state.user.email,
});

HeaderWallet.propTypes = {
  actualExpenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.shape({
      ask: PropTypes.string,
      bid: PropTypes.string,
      code: PropTypes.string,
      codein: PropTypes.string,
      create_date: PropTypes.string,
      high: PropTypes.string,
      low: PropTypes.string,
      name: PropTypes.string,
      pctChange: PropTypes.string,
      timestamp: PropTypes.string,
      varBid: PropTypes.string,
    })).isRequired,
  })).isRequired,
  actualTotalExpenses: PropTypes.number.isRequired,
  actualEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(HeaderWallet); //
