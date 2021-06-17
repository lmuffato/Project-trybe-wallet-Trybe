import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions/wallet';
import getCurrencies from '../Service/data';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.setExchangeRates = this.setExchangeRates.bind(this);
  }

  componentDidMount() {
    this.setExchangeRates();
  }

  async setExchangeRates() {
    const response = await getCurrencies();
    this.setState({ exchangeRates: response });
    return response;
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  selectCurrency(currenciesCode, currencies) {
    return (
      <label htmlFor="currencies">
        Moeda:
        <select
          value={ currencies }
          name="currency"
          id="currencies"
          onChange={ this.handleChange }
        >
          {currenciesCode.map((currency, index) => (
            <option key={ index }>
              {currency.code}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderValue(value) {
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          value={ value }
          name="value"
          id="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderPayment(payment) {
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          value={ payment }
          name="method"
          id="payment"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderDescription(description) {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          value={ description }
          name="description"
          id="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTag(tag) {
    return (
      <label htmlFor="tag">
        Tag:
        <select value={ tag } name="tag" id="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currenciesCode, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(currenciesCode);
    return (
      <form>
        {this.renderValue(value)}
        {this.renderDescription(description)}
        {this.selectCurrency(currenciesCode, currency)}
        {this.renderPayment(method)}
        {this.renderTag(tag)}
        <button
          type="button"
          onClick={ () => expenses(this.state) }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currenciesCode: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  expenses: (expense) => dispatch(addExpenses(expense)),
});

const mapStateToProps = (state) => ({
  currenciesCode: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
