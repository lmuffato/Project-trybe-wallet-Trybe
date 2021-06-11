import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions';

class WalletTable extends Component {
  constructor() {
    super();
    this.valueConverted = this.valueConverted.bind(this);
  }

  valueConverted(expense) {
    const value = expense.value * expense.exchangeRates[expense.currency].ask;
    const updatedValue = value.toFixed(2);
    return parseFloat(updatedValue);
  }

  render() {
    const { expenses, deleteExp } = this.props;
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
          { expenses.map((expense) => (
            <tr key={ `${expense.id}table` }>
              <td>{expense.description}</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              {/* https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary */}
              <td>{ Math.round(expense.value * 100) / 100}</td>
              <td>
                {expense.exchangeRates[expense.currency].name.split('/')[0]}
              </td>
              <td>
                { Math.round(expense.exchangeRates[expense.currency].ask * 100) / 100 }
              </td>
              <td>{this.valueConverted(expense)}</td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteExp(expense.id) }
                >
                  Excluir
                </button>
              </td>
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

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
});

WalletTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
