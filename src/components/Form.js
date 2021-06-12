import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpensesWithCurrency } from '../actions';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      formValues: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {},
      },
    };
    this.renderExpensesValues = this.renderExpensesValues.bind(this);
    this.renderExpensesDescription = this.renderExpensesDescription.bind(this);
    this.renderExpensesCurrency = this.renderExpensesCurrency.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderExpensesTag = this.renderExpensesTag.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.sendState = this.sendState.bind(this);
  }

  updateForm(field, newValue) {
    this.setState((previState) => ({
      formValues: {
        ...previState.formValues,
        [field]: newValue,
      }
    }));
  }

  sendState() {
    const { formValues } = this.state;
    const { sendExpenses } = this.props;
    sendExpenses(formValues);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const asArray = Object.entries(data).filter((ele) => ele[0] !== 'USDT'
      && ele[0] !== 'DOGE');
    this.setState((previState) =>({
      currencies: [...asArray],
      formValues: {
        ...previState.formValues,
        exchangeRates: data,
      },
    }
    ));
    return data;
  }

  renderExpensesValues() {
    return (
      <label htmlFor="expenses">
        Valor
        <input
          id="expenses"
          type="number"
          onChange={ (event) => this.updateForm('value', event.target.value) }
        />
      </label>
    );
  }

  renderExpensesDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          onChange={ (event) => this.updateForm('description', event.target.value) }
        />
      </label>
    );
  }

  renderExpensesCurrency() {
    const { currencies } = this.state;
    const options = currencies.map((ele) => (
      <option value={ ele[0] } key={ ele[0] }>
        { ele[0] }
      </option>));
    return (
      <label htmlFor="currency">
        Moeda
        <select 
          id="currency"
          name="currency"
          onChange={ (event) => this.updateForm('currency', event.target.value) }
        >
          { options }
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          name="payment"
          onChange={ (event) => this.updateForm('method', event.target.value) }
        >
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </label>
    );
  }

  renderExpensesTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ (event) => this.updateForm('tag', event.target.value) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderAddButton() {
    return (
      <button
        type="button"
        onClick={ this.sendState }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    return (
      <form className="Form">
        { this.renderExpensesValues() }
        <br />
        { this.renderExpensesDescription() }
        <br />
        { this.renderExpensesCurrency() }
        <br />
        { this.renderPaymentMethod() }
        <br />
        { this.renderExpensesTag() }
        <br />
        { this.renderAddButton() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendExpenses: (values) => dispatch(addExpensesWithCurrency(values)),
});

Form.propTypes = {
  sendExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
