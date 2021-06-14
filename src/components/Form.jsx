import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { saveExpense } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currencies: [],
      paymentMethods: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      expenseTag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createOptionsElements = this.createOptionsElements.bind(this);
    this.createTextInputs = this.createTextInputs.bind(this);
    this.createDropdownElements = this.createDropdownElements.bind(this);
  }

  componentDidMount() {
    this.convertCurrencyDataToInitials();
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { addExpense } = this.props;
    const fetchFunc = await this.fetchCurrenciesAPI();
    const expenseDetailed = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: fetchFunc,
    };
    addExpense(expenseDetailed);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  async fetchCurrenciesAPI() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    delete response.USDT;
    return response;
  }

  async convertCurrencyDataToInitials() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    delete response.USDT;
    const currenciesNames = Object.keys(response);
    this.setState({ currencies: currenciesNames });
  }

  createOptionsElements(item, stateKey) {
    return (
      <option
        data-testid={ item }
        key={ `${item}-option` }
        value={ stateKey }
      >
        { item }
      </option>
    );
  }

  createDropdownElements(inputName, stateKey) {
    return (
      <label htmlFor={ inputName }>
        <select
          id={ inputName }
          name={ inputName }
          data-testid={ `${inputName}-input` }
          onChange={ this.handleChange }
        >
          {stateKey.map((item) => (this.createOptionsElements(item)))}
        </select>
      </label>
    );
  }

  createTextInputs(inputName, stateKey) {
    return (
      <label htmlFor={ inputName }>
        <input
          data-testid={ `${inputName}-input` }
          id={ inputName }
          type="text"
          name={ inputName }
          value={ stateKey }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createExpenseDetailsObject() {
    const objectExpense = { testKey: 'testValue' };
    return objectExpense;
  }

  render() {
    const { value, description, currencies, paymentMethods, expenseTag } = this.state;
    return (
      <div>
        <form>
          Valor da despesa:
          { this.createTextInputs('value', value) }
          Descrição da despesa:
          { this.createTextInputs('description', description)}
          Moeda:
          { this.createDropdownElements('currency', currencies)}
          Método de pagamento:
          { this.createDropdownElements('method', paymentMethods)}
          Categoria da despesa:
          { this.createDropdownElements('tag', expenseTag)}
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expenseDetails) => dispatch(saveExpense(expenseDetails)),
});

Form.propTypes = {
  addExpense: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Form);