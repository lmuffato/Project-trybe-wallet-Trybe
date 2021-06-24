import React from 'react';
import Textinput from './Textinput';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Textinput />
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
          >
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            name="payment"
            id="payment"
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debt">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
          >
            <option value="food">Alimentação</option>
            <option value="lasure">Lazer</option>
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
