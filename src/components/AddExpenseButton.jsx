import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchtApiExchange from '../services/ApiExchange';
import {
  expensesValues,
  expensesDescription,
  addExpenses,
  expensesId,
  sumExpenses,
  currencies,
} from '../actions/index';

class AddExpenseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.buttonForAddExpenses = this.buttonForAddExpenses.bind(this);
    this.conversionAndSum = this.conversionAndSum.bind(this);
  }

  componentDidMount() {
    const { funcForAddexpensesCount, actualexpenses } = this.props;
    funcForAddexpensesCount(actualexpenses.length);
  }

  async fetchApi() {
    const { funcCurrencies } = this.props;
    const fet = await fetchtApiExchange();
    funcCurrencies(fet);
  }

  clearAllInputs() {
    const { funcExpensesValues, funcDescription } = this.props;
    funcExpensesValues(0);
    funcDescription('');
  }

  async buttonForAddExpenses() {
    const {
      // funcForSumExpenses,
      funcForAddExpenses,
      actualCurrencies,
      actualexpenses,
      actualValue,
      actualDescription,
      actualCurrency,
      actualmethod,
      actualtag,
    } = this.props;

    await this.fetchApi();

    await funcForAddExpenses({
      id: actualexpenses.length,
      value: actualValue.toString(),
      description: actualDescription,
      currency: actualCurrency,
      method: actualmethod,
      tag: actualtag,
      exchangeRates: actualCurrencies,
    });
    this.conversionAndSum();
    this.clearAllInputs();
  }

  conversionAndSum() {
    const { actualexpenses, funcForSumExpenses } = this.props;
    let total = 0;
    actualexpenses.forEach((ele) => {
      total += (ele.value * 1) * (ele.exchangeRates[ele.currency].ask * 1);
    });
    total = parseFloat(total).toFixed(2);
    // console.log(total);
    funcForSumExpenses(total);
  }

  render() {
    return (
      <div>
        <button
          id="bnt-AddExpense"
          type="button"
          onClick={ () => {
            this.buttonForAddExpenses();
          } }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualexpenses: state.wallet.expenses,
  actualCurrencies: state.wallet.currencies,
  actualExpensesCount: state.wallet.expensesCount,
  actualValue: state.wallet.value,
  actualDescription: state.wallet.description,
  actualCurrency: state.wallet.currency,
  actualmethod: state.wallet.method,
  actualtag: state.wallet.tag,
  actualTotalExpenses: state.wallet2.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  funcForAddExpenses: (expenses) => dispatch(addExpenses(expenses)),
  funcForAddexpensesCount: (id) => dispatch(expensesId(id)),
  funcForSumExpenses: (totalValues) => dispatch(sumExpenses(totalValues)),
  funcCurrencies: (data) => dispatch(currencies(data)), // wallet sate: currencies

  funcExpensesValues: (value) => dispatch(expensesValues(value)),
  funcDescription: (description) => dispatch(expensesDescription(description)),
});

AddExpenseButton.propTypes = {
  actualexpenses: PropTypes.arrayOf(PropTypes.shape({
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
  funcCurrencies: PropTypes.func.isRequired,
  funcDescription: PropTypes.func.isRequired,
  funcExpensesValues: PropTypes.func.isRequired,
  funcForAddExpenses: PropTypes.func.isRequired,
  funcForAddexpensesCount: PropTypes.func.isRequired,
  funcForSumExpenses: PropTypes.func.isRequired,
  actualValue: PropTypes.number.isRequired,
  actualDescription: PropTypes.string.isRequired,
  actualCurrency: PropTypes.string.isRequired,
  actualmethod: PropTypes.string.isRequired,
  actualtag: PropTypes.string.isRequired,
  actualCurrencies: PropTypes.objectOf(PropTypes.shape({
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseButton);
