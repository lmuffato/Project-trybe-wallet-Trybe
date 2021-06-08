import React from 'react';
import getCurrencies from '../../../services/api';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      tags: {
        food: 'Alimentação',
        leisure: 'Lazer',
        work: 'Trabalho',
        transport: 'Transporte',
        healthy: 'Saúde',
      },
      paymentOptions: {
        cash: 'Dinheiro',
        c_credit: 'Cartão de crédito',
        c_debit: 'Cartão de débito',
      },
      currencies: {},
    };
  }

  componentDidMount() {
    this.loadCurrencies();
  }

  async loadCurrencies() {
    // https://stackabuse.com/javascript-remove-a-property-from-an-object
    const { USDT, ...currencies } = await getCurrencies();
    this.setState({
      currencies,
    });
  }

  render() {
    const { tags, paymentOptions, currencies } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            { Object.keys(currencies).map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            )) }
          </select>
        </label>

        <label htmlFor="payment-option">
          Método de pagamento:
          <select id="payment-option">
            {Object.entries(paymentOptions).map(([value, name]) => (
              <option key={ value } value={ value }>{name}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            {Object.entries(tags).map(([value, name]) => (
              <option key={ value } value={ value }>{name}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default ExpensesForm;
