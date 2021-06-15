/* eslint-disable */ 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTotal, addExpense, getCurrenciesThunk, editExpense, editItem } from '../actions';

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

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    const { getCurrencies } = this.props;
    getCurrencies();
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
    this.fetchAPI();
    const { value, description, currency, tag, method } = this.state;
    const { dispatchExpense, expenses, currencies, idEdit, dispatchEditExpense, dispatchEditId } = this.props;
    
    const expense = {
      id: idEdit || expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };

    if (idEdit !== null) {
      dispatchEditExpense(expense);
    } else {
      dispatchExpense(expense);
    };

    dispatchEditId(null);
    this.updateTotal(expense);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });

    document.getElementById('valor').value = null;
  }

  render() {
    const { currencies } = this.props;
    const currenciesName = Object.keys(currencies);
    return (
     <> 
      <form>
        <label htmlFor="valor">
          Valor
          <input data-testid="value-input" onChange={ this.handleChange } type="number" name="value" id="valor" />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input
            data-testid="description-input"
            onChange={ this.handleChange }
            name="description"
            type="text"
            id="expense-description"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select data-testid="currency-input" onChange={ this.handleChange } name="currency" id="moeda">
            {currenciesName.map((currency, index) => (
              <option key={ index }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select data-testid="method-input" onChange={ this.handleChange } name="method" id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select data-testid="tag-input" onChange={ this.handleChange } name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        </form>
        <button type="button" onClick={ this.handleClick }>
          Adicionar Despesa
        </button>
      </>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  dispatchTotal: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
  total: PropTypes.number.isRequired,
  dispatchExpense: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idEdit: state.wallet.idEdit,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  dispatchExpense: (expense) => dispatch(addExpense(expense)),
  dispatchTotal: (value) => dispatch(updateTotal(value)),
  dispatchEditId: (id) => dispatch(editItem(id)),
  dispatchEditExpense: (expense) => dispatch(editExpense(expense)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
