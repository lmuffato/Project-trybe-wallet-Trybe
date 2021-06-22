import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import getCoins from '../services/api';
import { createExpense, listCoins, sumExpenses } from '../actions/index';

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
    this.sumExpenses = this.sumExpenses.bind(this);
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

  // componentDidUpdate() {
  //   this.sumExpenses();
  // }
  componentWillUnmount() {
    this.sumExpenses();
  }

  // async fetchApi() {
  //   const { createListCoins } = this.props;
  //   const data = await getCoins();
  //   const coins = await Object.keys(data);
  //   await this.setState({
  //     exchangeRates: data,
  //   });
  //   createListCoins(coins);
  // }

  async fetchApi() {
    const { createListCoins } = this.props;
    const data = await getCoins();
    const coins = await Object.keys(data);
    createListCoins(coins);
  }

  async fetchApiExpense() {
    const data = await getCoins();
    await this.setState({
      exchangeRates: data,
    });
  }

  async sumExpenses() {
    const { sumAllExpenses, expenses } = await this.props;
    // console.log(expenses);
    // const { totalExpenses } = expenses;
    // let totalExpenses = 0;
    for (let i = 0; i < expenses.length; i += 1) {
      sumAllExpenses(expenses[i]);
      // this.setState({
      //   totalExpenses: totalExpenses + expenses.value,
      // });
      // totalExpenses += expenses[i].value;
      // expenses.exchangeRates.(expenses.currency)
      // Object.keys(expenses[i].exchangeRates).find((expenses[i].currency) => {

      //   })
      // })
      // expenses.value * expenses.
    }
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
    // const { updateExpense } = this.state;
    createExpenses(this.state);
    this.sumExpenses();
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
  totalExpenses: state.wallet.expenses.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  createListCoins: (coin) => dispatch(listCoins(coin)),
  createExpenses: (expense) => dispatch(createExpense(expense)),
  sumAllExpenses: (valueExpense) => dispatch(sumExpenses(valueExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
