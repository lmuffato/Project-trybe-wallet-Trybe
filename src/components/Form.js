import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-expense">
          Valor
          <input type="number" id="value-expense" />
        </label>
        <label htmlFor="describe-expense">
          Descrição
          <input type="text" id="describe-expense" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            // value={ a }
            // onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value=""> </option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            id="payment"
            // value={ a }
            // onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            // value={ a }
            // onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
