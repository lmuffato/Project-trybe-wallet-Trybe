import React from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.fillTableRows = this.fillTableRows.bind(this);
  }

  handleClick(key) {
    const { expenses, newDeleteExpense } = this.props;
    const filteredExpenses = expenses.filter((expense) => (expense.id !== key));
    newDeleteExpense(filteredExpenses);
  }

  fillTableRows() {
    const { expenses } = this.props;
    return (
      expenses.map((expense) => (
        <tr key={ expense.id }>
          <td>{ expense.description }</td>
          <td>{ expense.tag}</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ expense.exchangeRates[expense.currency].name }</td>
          <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
          <td>
            { parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
              .toFixed(2) }
          </td>
          <td>Real</td>
          <td>
            <button type="button">Editar</button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => this.handleClick(expense.id) }
            >
              Excluir
            </button>
          </td>
        </tr>
      ))
    );
  }

  render() {
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
          { this.fillTableRows() }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: arrayOf({}),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newDeleteExpense: (updatedExpense) => dispatch(deleteExpense(updatedExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);