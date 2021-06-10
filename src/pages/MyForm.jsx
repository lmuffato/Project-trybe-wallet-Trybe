import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Nome:
          <input type="text" id="name" />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input type="text" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">{}</select>
        </label>
        <label htmlFor="Mtdpagamento">
          Método de pagamento
          <select id="Mtdpagamento">
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
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
