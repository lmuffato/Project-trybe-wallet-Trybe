import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends Component {
  convertCurrency(expense) {
    return (parseFloat(expense.exchangeRates[expense.currency].ask)
    * parseFloat(expense.value)).toFixed(2);
  }

  render() {
    const { getExpenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio Utilizado</th>
            <th>Valor Convertido</th>
            <th>Moeda de Conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {getExpenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(Number(expense.value)
                * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button type="button" data-testid="edit-btn">Editar</button>
                <button type="button" data-testid="delete-btn">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

Expenses.propTypes = {
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Expenses);
