import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseInputs from './ExpenseInputs';
import { createExpense, getCoins } from '../actions/walletAction';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleSumTotal = this.handleSumTotal(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  // const subTotal = map do expenses({ currency, exchangeRates, value }) -> exchangeRates[currency].ask * value R: [10, 12, 15]
  // const total = subTotal.reduce((acc + currValue) => acc + currValue, 0)
  // action Creator => sumTotal(total)
  // chamana handleclick;
  // const subTotal = expenses.map(({ currency, exchangeRates, value }) => {
  //   exchangeRates[currency].ask * value;
  // handleSumTotal() {
  //   const { expenses } = this.props;
  //   return expenses.reduce((total, { currency, exchangeRates, value }) => {
  //     const subTotal = exchangeRates[currency];
  //     const totalValue = subTotal.ask * value;
  //     return total + totalValue;
  //   }, 0);
  // }

  async handleClick() {
    const { value, description, currency, method, tag } = this.state;
    const { addExpense, expenses, getApi, currencies } = this.props;
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
    // handleSumTotal();
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
