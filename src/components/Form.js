import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" aria-label="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" aria-label="descrição" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select name="moeda" aria-label="moeda">
            <option>Vazio</option>
          </select>
        </label>

        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select name="metodoPagamento" aria-label="método de pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" aria-label="tag">
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

export default Form;
