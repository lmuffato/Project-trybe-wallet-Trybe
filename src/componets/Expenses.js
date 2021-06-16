import React from 'react';

class Expenses extends React.Component {
  render() {
    return (
      <div>
        <h1>Despesa</h1>
        <form>
          <label htmlFor="id-valor">
            Valor
            <input type="text" />
          </label>
          <label htmlFor="id-descrição">
            Descrição
            <input type="text" />
          </label>
          <label htmlFor="id-moeda">
            Moeda
            <select>
              <option value="moedas">Moedas</option>
            </select>
          </label>
          <label htmlFor="id-metodoDePagamento">
            Método de pagamento
            <select>
              <option value="metodoDePagamento">Dinheiro</option>
              <option value="metodoDePagamento">Cartão de crédito</option>
              <option value="metodoDePagamento">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="id-tag">
            Tag
            <select>
              <option value="tag">Alimentação</option>
              <option value="tag">Lazer</option>
              <option value="tag">Trabalho</option>
              <option value="tag">Transporte</option>
              <option value="tag">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Expenses;
