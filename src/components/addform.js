import React from 'react';

class AddForm extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="value">
            Valor: 0
            <input type="number" data-testid="value-input" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" data-testid="description-input" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select data-testid="currency-input" id="currency">Moeda</select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select data-testid="payment-input" id="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select data-testid="tag-input" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

export default AddForm;
