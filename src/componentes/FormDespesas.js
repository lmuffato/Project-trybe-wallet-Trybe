import React from 'react';
// import PropTypes from 'prop-types';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.selectMoedas = this.selectMoedas.bind(this);
  }

  selectMoedas() {
    return (
      <select id="moeda">
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="ARS">ARS</option>
        <option value="BTC">BTC</option>
        <option value="LTC">LTC</option>
        <option value="JPY">JPY</option>
        <option value="CHF">CHF</option>
        <option value="AUD">AUD</option>
        <option value="CNY">CNY</option>
        <option value="ILS">ILS</option>
        <option value="ETH">ETH</option>
        <option value="XTP">XRP</option>
      </select>
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descricaoDoValor">
          Descrição
          <input type="text" id="descricaoDoValor" />
        </label>
        <label htmlFor="moeda">
          Moeda
          { this.selectMoedas() }
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select id="metodoPagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select id="categoria">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">saúde</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

/* FormDespesas.propTypes = {
  receiveLoginEmail: PropTypes.func.isRequired,
  arrayExpenses: PropTypes.func.isRequired,
  arrayCurrencys: PropTypes.func.isRequired,
}; */

export default FormDespesas;
