import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    this.currencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async currencies() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await fetchAPI.json();
    this.setState({ exchangeRates });
  }

  valueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          name="value"
          value={ value }
          type="number"
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  descriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          name="description"
          value={ description }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  currencyInput() {
    const { currency, exchangeRates } = this.state;
    const allCurrencies = Object.keys(exchangeRates);
    const myCurrencies = allCurrencies.filter((curency) => curency !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda
        <select
          type="select"
          id="currency"
          name="currency"
          value={ currency }
          onChange={ (event) => this.handleChange(event) }
        >
          {myCurrencies.map((currenc) => <option key={ currenc }>{currenc}</option>)}
        </select>
      </label>
    );
  }

  handleClick() {
    const { id } = this.state;
    const { expenseDispatch } = this.props;
    expenseDispatch(this.state);
    this.setState(
      {
        id: id + 1,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {},
      },
    );
    this.currencies();
  }

  render() {
    const { method, tag } = this.state;
    return (
      <form>
        {this.valueInput()}
        {this.descriptionInput()}
        {this.currencyInput()}
        <label htmlFor="method">
          Método de pagamento
          <select
            type="select"
            id="method"
            value={ method }
            name="method"
            onChange={ (event) => this.handleChange(event) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select
            type="select"
            id="category"
            name="tag"
            value={ tag }
            onChange={ (event) => this.handleChange(event) }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  expenseDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (obj) => dispatch(addExpense(obj)) });

export default connect(null, mapDispatchToProps)(Form);
