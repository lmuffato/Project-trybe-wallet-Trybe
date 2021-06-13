import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  render() {
    const { currenciesList } = this.props;

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select>
            {currenciesList.map((curr) => <option key={ curr }>{curr}</option>)}
          </select>
        </label>
        <label htmlFor="metodo-pgto">
          Método de pagamento
          <select>
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesList: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(WalletForm);
