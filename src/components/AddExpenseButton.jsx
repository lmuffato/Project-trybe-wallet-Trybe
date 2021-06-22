import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchtApiExchange from '../services/ApiExchange';
import { addExpenses, expensesId, sumExpenses, exchangeRates } from '../actions/index';

class AddExpenseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.buttonForAddExpenses = this.buttonForAddExpenses.bind(this);
  }

  componentDidMount() {
    const { funcForAddexpensesCount, actualexpenses } = this.props;
    funcForAddexpensesCount(actualexpenses.length);
  }

  async fetchApi() {
    const { funcExchangeRates } = this.props;
    const fet = await fetchtApiExchange();
    console.log(fet);
    const exchangeFiltered = {};
    Object.entries(fet).forEach(([key, value]) => {
      if (key !== 'USDT') { exchangeFiltered[key] = value; }
    });
    funcExchangeRates(exchangeFiltered);
  }

  async buttonForAddExpenses() {
    const {
      funcForSumExpenses,
      funcForAddExpenses,
      actualexpenses,
      actualValue,
      actualDescription,
      actualCurrency,
      actualmethod,
      actualtag,
      actualRates,
    } = this.props;

    // const { funcExchangeRates } = this.props;
    // const fet = await fetchtApiExchange();
    // console.log(fet);
    // const exchangeFiltered = {};
    // Object.entries(fet).forEach(([key, value]) => {
    //   if (key !== 'USDT') { exchangeFiltered[key] = value; }
    // });
    // funcExchangeRates(exchangeFiltered);

    await this.fetchApi();
    await funcForAddExpenses({
      id: actualexpenses.length,
      value: actualValue,
      description: actualDescription,
      currency: actualCurrency,
      method: actualmethod,
      tag: actualtag,
      exchangeRates: actualRates,
    });
    const total = actualexpenses.reduce((acumulador, numero) => acumulador + numero.value,
      0);
    await funcForSumExpenses(total + actualValue);
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
  actualExpensesCount: state.wallet.expensesCount,
  actualValue: state.wallet.value,
  actualDescription: state.wallet.description,
  actualCurrency: state.wallet.currency,
  actualmethod: state.wallet.method,
  actualtag: state.wallet.tag,
  actualRates: state.wallet2.exchangeRates,
  actualTotalExpenses: state.wallet2.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  funcForAddExpenses: (expenses) => dispatch(addExpenses(expenses)),
  funcForAddexpensesCount: (id) => dispatch(expensesId(id)),
  funcForSumExpenses: (totalValues) => dispatch(sumExpenses(totalValues)),
  funcExchangeRates: (rates) => dispatch(exchangeRates(rates)),
});

AddExpenseButton.propTypes = {
  actualexpenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.number,
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
  funcExchangeRates: PropTypes.func.isRequired,
  funcForAddExpenses: PropTypes.func.isRequired,
  funcForAddexpensesCount: PropTypes.func.isRequired,
  funcForSumExpenses: PropTypes.func.isRequired,
  actualValue: PropTypes.number.isRequired,
  actualDescription: PropTypes.string.isRequired,
  actualCurrency: PropTypes.string.isRequired,
  actualmethod: PropTypes.string.isRequired,
  actualtag: PropTypes.string.isRequired,
  actualRates: PropTypes.objectOf(PropTypes.shape({
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
