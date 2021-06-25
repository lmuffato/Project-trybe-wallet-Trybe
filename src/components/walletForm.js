import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="valor" />
        </label>

        <label htmlFor="descrição">
          Descrição
          <input type="text" name="descrção" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select name="moeda">
            <option>vazio</option>
          </select>
        </label>

        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select name="metodo-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de débito</option>
            <option>Cartão de crédito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag">
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

export default WalletForm;
