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
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  async fetchAPI() {
    const listExchange = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const filteredListExchange = [...listExchange]
      .filter((foreingExchange) => foreingExchange !== 'USDT');
    this.setState({
      availableExchange: [...filteredListExchange],
    });
  }

  render() {
    const { total, availableExchange } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="total-field">{ total }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" name="value" onChange={ this.hundleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" onChange={ this.hundleChange } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" onChange={ this.hundleChange }>
              { availableExchange
                .map((drakmas, index) => <option key={ index }>{ drakmas }</option>) }
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
