import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletExtra } from '../actions';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: 0,
      value: null,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      arrExchangeList: [],
    };
    this.handleState = this.handleState.bind(this);
    this.value = this.value.bind(this);
    this.description = this.description.bind(this);
    this.currency = this.currency.bind(this);
    this.method = this.method.bind(this);
    this.tag = this.tag.bind(this);
    this.tableHead = this.tableHead.bind(this);
    this.tableBody = this.tableBody.bind(this);
    this.addCurrency = this.addCurrency.bind(this);
  }

  componentDidMount() {
    this.setExchangeList();
  }

  async setExchangeList() {
    const listExchange = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const arrExchangeList = Object.keys(listExchange)
      .filter((currency) => currency !== 'USDT');
    this.setState({ arrExchangeList });
  }

  value() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name="value"
          value={ value }
          id="value"
          onChange={ this.handleState }
        />
      </label>
    );
  }

  description() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          value={ description }
          id="description"
          onChange={ this.handleState }
        />
      </label>
    );
  }

  currency() {
    const { currency, arrExchangeList } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          value={ currency }
          id="currency"
          onChange={ this.handleState }
        >
          { arrExchangeList
            .map((pix) => <option key={ pix }>{pix}</option>) }
        </select>
      </label>
    );
  }

  method() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select name="method" value={ method } id="method" onChange={ this.handleState }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" value={ tag } id="tag" onChange={ this.handleState }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  tableHead() {
    return (
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {this.tableBody()}
        </tbody>
      </table>
    );
  }

  tableBody() {
    const {
      value,
      description,
      currency,
      method,
    } = this.state;
    return (
      <tr>
        <th>{ value }</th>
        <th>{description}</th>
        <th>{currency}</th>
        <th>{method}</th>
        <td>{currencyName[0]}</td>
        <td>{Math.round(exchangeValue * 100) / 100}</td>
        <td>Real</td>
        <td>{Math.round(convertedValue * 100) / 100}</td>
        <td>
          <button type="button">Editar</button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteOneExpense() }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.showBtn();
  }

  addCurrency() {
    return (
      <button
        type="button"
        onClick={ this.addNewExpenses }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    return (
      <form>
        { this.value() }
        { this.description() }
        { this.currency() }
        { this.method() }
        { this.tag() }
        { this.tableHead() }
        { this.tableBody() }
        { this.addCurrency() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchWallet: (expenses) => dispatch(walletExtra(expenses)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currency: state.wallet.expenses,
  expenses: state.wallet.currencies,
});

Forms.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
