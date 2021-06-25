import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      id: '0',
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.goSub = this.goSub.bind(this);
    this.requestCurrencies = this.requestCurrencies.bind(this);
  }

  componentDidMount() {
    this.requestCurrencies();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  // codigo copiado de Paulo Eliezer e adaptado ao codigo fonte.
  async goSub(action) {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((resultado) => resultado);
    const { id, value, description, currency, method, tag } = this.state;
    const expenseObj = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: result,
    };
    await action(expenseObj);
    const idPlus = id + 1;
    this.setState({
      id: idPlus,
    });
  }
  // ---------------------------------------------------------------------- //

  async requestCurrencies() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => this.setState({
        currencies: Object.keys(response),
      }));
  }

  render() {
    const { SES } = this.props;
    const { currencies } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input onChange={ this.handleChange } type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              onChange={ this.handleChange }
              type="text"
              id="description"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select onChange={ this.handleChange } id="currency">
              {currencies.map((currency) => (
                currency === 'USDT' ? null
                  : (<option key={ currency }>{currency}</option>)
              ))}
            </select>
          </label>
          <label htmlFor="Payment-method">
            Método de pagamento
            <select id="Payment-method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ () => this.goSub(SES) }>Adicionar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SES: (item) => dispatch(addExpense(item)),
});

Form.propTypes = {
  SES: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
