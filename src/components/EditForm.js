import React, { Component } from 'react';
import { objectOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { setNewExpense, updateTotalExpenses } from '../actions/index';
import Tag from './WalletFormOptions/Tag';
import Method from './WalletFormOptions/Method';
import Currency from './WalletFormOptions/Currency';
import Description from './WalletFormOptions/Description';
import Value from './WalletFormOptions/Value';
import fetchCurrencies from '../services/fetchCurrencies';

class EditForm extends Component {
  constructor(props) {
    super(props);

    const { expenses, id } = this.props;
    const editCell = expenses.find((expense) => expense.id === id);
    const { value, description, currency, method, tag } = editCell;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.setId = this.setId.bind(this);
    this.createNewExpense = this.createNewExpense.bind(this);

    this.state = {
      value,
      description,
      currency,
      method,
      tag,
    };
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
    const { value, description, currency, method, tag, id } = this.state;
    const formatValue = value.replace(',', '.');
    const exchangeRates = await fetchCurrencies();
    const newExpense = {
      id,
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
    this.createNewExpense();
    const { expenses, updateExpenses } = this.props;
    const updatedList = expenses.filter((expense) => {
      if (expense.id !== newExpense.id) return expense;
      return newExpense;
    });
    editCell(updatedList);
    updateExpenses(Number((value * (exchangeRates[currency].ask)).toFixed(2)));
    this.resetState();
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
          Editar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
  id: state.edit.editCell,
});

const mapDispatchToProps = (dispatch) => ({
  editCell: (data) => dispatch(setNewExpense(data)),
  updateExpenses: (value) => dispatch(updateTotalExpenses(value)),
});

EditForm.propTypes = {
  currencies: objectOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
