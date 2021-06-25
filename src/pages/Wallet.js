import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      availableExchange: [],
    };
    this.currencyList = this.currencyList.bind(this);
    this.setExchangeList = this.setExchangeList.bind(this);
    this.header = this.header.bind(this);
    this.addCurrency = this.addCurrency.bind(this);
  }

  async setExchangeList() {
    const listExchange = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const arrFullExchangeList = Object.values(listExchange);
    console.log(arrFullExchangeList);
    const arrFilteredExchange = arrFullExchangeList
      .filter((currency) => currency !== 'USDT');
    this.setState({
      availableExchange: arrFilteredExchange,
    });
  }

  header() {
    const { total, availableExchange } = this.state;
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" onChange={ this.hundleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" onChange={ this.hundleChange } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" onChange={ this.hundleChange }>
              { availableExchange
                .map((pix, id) => <option key={ id } value={ pix }>{ pix }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select name="method" onChange={ this.hundleChange }>
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" onChange={ this.hundleChange }>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </header>
    );
  }

  addCurrency() {
    return (
      <button
        type="button"
        onClick={ this.currencyList }
      >
        Adicionar despesa
      </button>
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
      valor,
      descri,
      tag,
      metodo,
    } = this.props;
    return (
      <tr>
        <th>{ expenses.valor }</th>
        <th>{ expenses.descri }</th>
        <th>{ expenses.tag }</th>
        <th>{ expenses.metodo }</th>
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
  }

  render() {
    return (
      <div>
        { this.header() }
        { this.addCurrency() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
