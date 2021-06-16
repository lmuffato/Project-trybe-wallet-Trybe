import React, { Component } from 'react';

class FormsToWallet extends Component {
  render() {
    return (

      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select name="coin">
            <option value="empty">Vazio</option>
          </select>
        </label>
        <label htmlFor="metpagamento">
          Método de pagamento
          <select name="metpagamento">
            <option value="money">Dienheiro</option>
            <option value="credCard">Cartão de crédito</option>
            <option value="debCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select name="Tag">
            <option value="food">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="Transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>

    );
  }
}

export default (FormsToWallet);
