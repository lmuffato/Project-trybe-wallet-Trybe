import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './expenseTable.css';
import { updatedExpenses, editExpense } from '../../actions';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  deleteExpense(id) {
    const { expenses, getUpdatedExpense } = this.props;
    const upDatedExpenses = expenses.filter((expense) => expense.id !== id);
    getUpdatedExpense(upDatedExpenses);
  }

  editExpense(expense) {
    const { editExpenses } = this.props;
    editExpenses(expense);
  }

  handleButton(expense) {
    const { id } = expense;
    return (
      <td>
        <button
          type="button"
          data-testid="edit-btn"
          onClick={ () => this.editExpense(expense) }
        >
          Editar
        </button>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => this.deleteExpense(id) }
        >
          Excluir
        </button>
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table id="table">
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
            <th rowSpan="2">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const convertValue = parseFloat(expense.exchangeRates[expense.currency].ask);
            const value = parseFloat(expense.value);
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{ value }</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>{ convertValue.toFixed(2) }</td>
                <td>{ (value * convertValue).toFixed(2) }</td>
                <td>Real</td>
                { this.handleButton(expense) }
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
const mapDispatpchToProps = (dispatch) => ({
  getUpdatedExpense: (obj) => dispatch(updatedExpenses(obj)),
  editExpenses: (obj) => dispatch(editExpense(obj)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatpchToProps)(ExpenseTable);
