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
          <select>{}</select>
        </label>
        <label htmlFor="Mtdpagamento">
          Método de pagamento
          <select>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
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

export default Form;
