import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import getCoins from '../services/api';
import { createExpense, listCoins, deleteExpense } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      value: null,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.renderCoins = this.renderCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createValue = this.createValue.bind(this);
    this.createCoins = this.createCoins.bind(this);
    this.createTag = this.createTag.bind(this);
    this.createPaymentMethod = this.createPaymentMethod.bind(this);
    this.createDescription = this.createDescription.bind(this);
    this.createButton = this.createButton.bind(this);
    this.createTable = this.createTable.bind(this);
    this.listExpenses = this.listExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { createListCoins } = this.props;
    const data = await getCoins();
    const coins = await Object.keys(data);
    await createListCoins(coins);
  }

  async fetchApiExpense() {
    const data = await getCoins();
    await this.setState({
      exchangeRates: data,
    });
  }

  async handleChange({ target: { id, value } }) {
    await this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    await this.fetchApiExpense();
    const { createExpenses, expenses } = this.props;
    await this.setState({
      id: expenses.length,
    });
    await createExpenses(this.state);
  }

  createValue() {
    return (
      <label htmlFor="value">
        Valor
        <input type="number" id="value" onChange={ this.handleChange } />
      </label>
    );
  }

  createCoins() {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          // value={ a }
          onChange={ this.handleChange }
        >
          {this.renderCoins()}
        </select>
      </label>
    );
  }

  createTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          // value={ a }
          onChange={ this.handleChange }
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

  createPaymentMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          // value={ a }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  createDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" id="description" onChange={ this.handleChange } />
      </label>
    );
  }

  createButton() {
    return (
      <button
        type="button"
        onClick={ () => this.handleClick() }
      >
        Adicionar Despesa
      </button>
    );
  }

  listExpenses() {
    const { expenses, deleteOneExpense } = this.props;
    return expenses.map((expense) => {
      const expenseNumber = expense.id;
      const key = expense.currency;
      const { exchangeRates } = expense;
      const currencyName = (exchangeRates[key].name).split('/');
      const exchangeValue = exchangeRates[key].ask;
      const convertedValue = expense.value * exchangeValue;
      return (
        <tr key={ expenseNumber }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{currencyName[0]}</td>
          <td>{Math.round(exchangeValue * 100) / 100}</td>
          <td>Real</td>
          <td>{Math.round(convertedValue * 100) / 100}</td>
          <td>
            <button type="button">Editar</button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteOneExpense(expense) }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  createTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {this.listExpenses()}
        </tbody>
      </table>
    );
  }

  renderCoins() {
    const { currencies } = this.props;
    return currencies.filter((currency) => (currency !== 'USDT'))
      .map((currency) => (
        <option key={ currency } value={ currency }>{ currency }</option>
      ));
  }

  render() {
    return (
      <form>
        {this.createValue()}
        {this.createCoins()}
        {this.createTag()}
        {this.createPaymentMethod()}
        {this.createDescription()}
        {this.createButton()}
        {this.createTable()}
      </form>
    );
  }
}

Form.propTypes = {
  currencies: array,
  createListCoins: func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  createListCoins: (coin) => dispatch(listCoins(coin)),
  createExpenses: (expense) => dispatch(createExpense(expense)),
  deleteOneExpense: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

// Referências:
// Como separar o nome das moedas do /Real Brasileiro: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
