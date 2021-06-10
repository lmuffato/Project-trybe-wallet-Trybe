import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      payment: ['Dinheiro',
        'Cartão de débito',
        'Cartão de crédito'],
      tag: ['Alimentação',
        'Lazer',
        'Trabalho',
        'Transporte',
        'Saúde',
      ],
    };
  }

  render() {
    const { payment, tag } = this.state;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input type="text" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input type="text" id="description-input" />
        </label>
        <label htmlFor="currency-select">
          Moeda
          <select id="currency-select">
            <option>Teste</option>
          </select>
        </label>
        <label htmlFor="payment-type">
          Método de pagamento
          <select id="payment-type">
            {payment.map((method, key) => <option key={ key }>{method}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            {tag.map((type, key) => <option key={ key }>{type}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
