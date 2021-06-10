import React, { Component } from 'react';
import { func, objectOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, setNewExpense, updateTotalExpenses } from '../actions/index';
import Tag from './WalletFormOptions/Tag';
import Method from './WalletFormOptions/Method';
import Currency from './WalletFormOptions/Currency';
import Description from './WalletFormOptions/Description';
import Value from './WalletFormOptions/Value';
import fetchCurrencies from '../services/fetchCurrencies';

class WalletForm extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const formatValue = value.replace(',', '.');
    const { expenses, setExpense, updateExpenses } = this.props;
    const exchangeRates = await fetchCurrencies();
    const newExpense = {
      id: expenses.length,
      value: formatValue,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    setExpense(newExpense);
    updateExpenses(Number((value * (exchangeRates[currency].ask)).toFixed(2)));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { currencies, isLoading } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const currenciesKeys = Object.keys(currencies).filter((key) => key !== 'USDT');
    return (
      <form onSubmit={ this.handleSubmit }>
        <Value value={ value } handleInput={ this.handleInput } />
        <Description description={ description } handleInput={ this.handleInput } />
        <Currency
          currencies={ currenciesKeys }
          selectedCur={ currency }
          handleInput={ this.handleInput }
        />
        <Method method={ method } handleInput={ this.handleInput } />
        <Tag tag={ tag } handleInput={ this.handleInput } />
        <button
          type="submit"
          disabled={ isLoading }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesThunk()),
  setExpense: (data) => dispatch(setNewExpense(data)),
  updateExpenses: (value) => dispatch(updateTotalExpenses(value)),
});

WalletForm.propTypes = {
  setCurrencies: func,
  currencies: objectOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
