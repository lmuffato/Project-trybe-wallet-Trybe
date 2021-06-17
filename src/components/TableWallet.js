import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableWallet extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
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
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                {
                  (parseFloat(expense.value
                    * (expense.exchangeRates[expense.currency].ask)))
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableWallet.propTypes = {
  currencies: PropTypes.object,
}.isRequerid;

export default connect(mapStateToProps)(TableWallet);

// Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir
