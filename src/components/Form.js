import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" name="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" name="descrição" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select>
              <option value="0">0</option>
            </select>
          </label>
          <label htmlFor="MetodoDePagamento">
            Método de pagamento:
            <select>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag:
            <select>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
