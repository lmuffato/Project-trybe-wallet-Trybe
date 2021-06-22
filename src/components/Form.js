import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import getCoins from '../services/api';
import { createExpense, listCoins } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      value: null,
      description: '',
      currency: '',
      method: '',
      tag: '',
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
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { createListCoins } = this.props;
    const data = await getCoins();
    const coins = await Object.keys(data);
    await this.setState({
      exchangeRates: data,
    });
    createListCoins(coins);
  }

  async handleChange(event) {
    await console.log(event.target);
    // await this.setState({
    //   [id]: value,
    // });
  }

  async handleClick() {
    const { createExpenses, expenses } = this.props;
    await this.setState({
      id: expenses.length,
    });
    createExpenses(this.state);
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
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
