import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseInputs from './ExpenseInputs';
import { createExpense, getCoins, sumTotal } from '../actions/walletAction';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: undefined,
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSumTotal = this.handleSumTotal.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSumTotal() {
    const { expenses } = this.props;
    return expenses.reduce((total, { currency, exchangeRates, value }) => {
      const coin = exchangeRates[currency];
      const subTotal = coin.ask * value;
      return total + subTotal;
    }, 0);
  }

  async handleClick() {
    const { value, description, currency = 'USD', method, tag } = this.state;
    const { addExpense, expenses, getApi, currencies, getTotal } = this.props;
    await getApi();

    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    addExpense(expense);
    const total = this.handleSumTotal();
    getTotal(total);
  }

  render() {
    return (
      <div>
        <ExpenseInputs
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  getTotal: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  getApi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(createExpense(expense)),
  getApi: () => dispatch(getCoins()),
  getTotal: (total) => dispatch(sumTotal(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

// Referências:
// handleSumTotal: https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981
