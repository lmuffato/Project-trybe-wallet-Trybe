import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  constructor() {
    super();

    this.renderTHead = this.renderTHead.bind(this);
    this.getExchangeRateData = this.getExchangeRateData.bind(this);
  }

  /*   getCurrencyName(expense) {
    const curr = expense.currency;
    return expense.exchangeRates[curr].name;
  } */

  getExchangeRateData({ currency, exchangeRates }, info) {
    return exchangeRates[currency][info];
  }

  renderTHead() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          {this.renderTHead()}
        </thead>
        <tbody>
          {expenses.length === 0 ? <span>Loading</span>
            : expenses.map((expense) => {
              const { id, value, description, method, tag } = expense;

              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>
                    {Math.round(value * 100) / 100}
                  </td>
                  <td>
                    {this.getExchangeRateData(expense, 'name')}
                  </td>
                  <td>
                    {Math.round(
                      this.getExchangeRateData(expense, 'ask') * 100,
                    ) / 100}
                  </td>
                  <td>
                    {Math.round(
                      value * this.getExchangeRateData(expense, 'ask') * 100,
                    ) / 100}
                  </td>
                  <td>Real</td>
                  <td>
                    <button type="button">Excluir</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
