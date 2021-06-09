import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <>
        <label htmlFor="valor">
          Valor
          <input id="valor" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select type="select" id="currency">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select type="select" id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select type="select" id="category">
            <option value="food">Alimentação</option>
            <option value="hobie">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="moving">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

export default Form;
