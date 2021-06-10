/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendCurrencies, updateTotal, addExpense } from '../actions';
import fetchCurrenciesApi from '../services/currenciesAPI';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.dispatchCurrencies = this.dispatchCurrencies.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.dispatchCurrencies();
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  updateTotal(expense) {
    const { dispatchTotal, total } = this.props;
    const { value, exchangeRates, currency } = expense;
    let newTotal = total;
    newTotal += (value * exchangeRates[currency].ask);
    dispatchTotal(newTotal);
  }

  handleClick() {
    const { value, description, currency, tag, method } = this.state;
    const{ dispatchExpense, expenses, currencies } = this.props;
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };

    dispatchExpense(expense);
    this.updateTotal(expense);

    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });

  }

  async dispatchCurrencies() {
    const { sendCurrenciesToRedux } = this.props;
    const currencies = await fetchCurrenciesApi();
    sendCurrenciesToRedux(currencies);
  }

  render() {
    const { currencies } = this.props;
    const currenciesName = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input onChange={this.handleChange} type="text" name="value" id="valor" />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input onChange={this.handleChange} name="description" type="text" id="expense-description" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select onChange={this.handleChange} name="currency" id="moeda">
            {currenciesName.map((currency, index) => (
              <option key={ index }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select onChange={this.handleChange} name="method" id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={this.handleChange} name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  sendCurrenciesToRedux: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  sendCurrenciesToRedux: (currencies) => dispatch(sendCurrencies(currencies)),
  dispatchExpense: (expense) => dispatch(addExpense(expense)),
  dispatchTotal: (value) => dispatch(updateTotal(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
