import React, { Component } from 'react';
import { func, objectOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesNamesThunk,
  setNewExpense, updateTotalExpenses } from '../actions/index';
import Tag from './WalletFormOptions/Tag';
import Method from './WalletFormOptions/Method';
import Currency from './WalletFormOptions/Currency';
import Description from './WalletFormOptions/Description';
import Value from './WalletFormOptions/Value';
import './WalletForm.css';
import updateExpenses from '../services/updateExpenses';

class WalletForm extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.setId = this.setId.bind(this);
    this.createNewExpense = this.createNewExpense.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  setId(expenses) {
    if (!expenses.length) return expenses.length;
    return expenses[expenses.length - 1].id + 1;
  }

  resetState() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async createNewExpense() {
    const { setCurrencies } = this.props;
    setCurrencies();
    const { value, description, currency, method, tag } = this.state;
    const formatValue = value.replace(',', '.');
    const { expenses, exchangeRates } = this.props;
    const newExpense = {
      id: this.setId(expenses),
      value: formatValue,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    return newExpense;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const newExpense = await this.createNewExpense();
    const { setExpense } = this.props;
    setExpense(newExpense);
    const { expenses, dispatchUpdatedExpenses } = this.props;
    const totalExpenses = updateExpenses(expenses);
    dispatchUpdatedExpenses(totalExpenses);
    this.resetState();
  }

  render() {
    const { currencies, isLoading } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="input-form" onSubmit={ this.handleSubmit }>
        <Value value={ value } handleInput={ this.handleInput } />
        <Description description={ description } handleInput={ this.handleInput } />
        <Currency
          currencies={ currencies }
          selectedCur={ currency }
          handleInput={ this.handleInput }
        />
        <Method method={ method } handleInput={ this.handleInput } />
        <Tag tag={ tag } handleInput={ this.handleInput } />
        <div className="button-container">
          <button
            className="expense-add"
            type="submit"
            disabled={ isLoading }
          >
            Adicionar Despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesNamesThunk()),
  setExpense: (data) => dispatch(setNewExpense(data)),
  dispatchUpdatedExpenses: (value) => dispatch(updateTotalExpenses(value)),
});

WalletForm.propTypes = {
  setCurrencies: func,
  currencies: objectOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
