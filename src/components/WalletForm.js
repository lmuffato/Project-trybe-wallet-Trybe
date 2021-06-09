import React, { Component } from 'react';

class WalletForm extends Component {
  // constructor(_props) {
  //   super(_props);
  // }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option value="None">None</option>
          </select>
        </label>
        <label htmlFor="metodo-pgt">
          Método de pagamento
          <select id="metodo-pgt">
            <option value="money">Dinheiro</option>
            <option value="creditcard">Cartão de crédito</option>
            <option value="debtcard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
