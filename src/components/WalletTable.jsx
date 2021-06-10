import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WalletTable extends Component {
  constructor() {
    super();

    this.getExchangeName = this.getExchangeName.bind(this);
    this.getExchangeAsk = this.getExchangeAsk.bind(this);
    this.provideConvertedValue = this.provideConvertedValue.bind(this);
  }
  getExchangeName(expense) {
    const { exchangeRates } = expense;
    const exchange = exchangeRates[expense.currency];
    const exchangeName = exchange.name.split('/')[0];
    return exchangeName;
  }
  
  getExchangeAsk(expense) {
    const { exchangeRates } = expense;
    const { ask } = exchangeRates[expense.currency];
    return parseFloat(ask).toFixed(2);
  };

  provideConvertedValue(expense) {
    const { exchangeRates } = expense;
    const { ask } = exchangeRates[expense.currency];
    const convertedValue = Number(expense.value) * ask;
    return parseFloat(convertedValue).toFixed(2);
  };

  render() {
    const { expenses, onDelete } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>
                {expense.value}
              </td>
              <td>{this.getExchangeName(expense)}</td>
              <td>{this.getExchangeAsk(expense)}</td>
              <td>
                {this.provideConvertedValue(expense)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={() => onDelete(expense)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  onDelete: PropTypes.func.isRequired,
  expenses: PropTypes.objectOf({
    value: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

export default WalletTable;
