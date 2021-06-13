import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, number, func } from 'prop-types';
import { removeExpense, updateTotalExpenses } from '../../actions';
import updateExpenses from '../../services/updateExpenses';

function DeleteButton(props) {
  function updatedList() {
    const { expenses, id } = props;
    return expenses.filter((expense) => expense.id !== id);
  }

  function deleteExpense() {
    const { updateExpensesList, dispatchUpdatedExpenses } = props;
    const updatedExpenses = updatedList();
    updateExpensesList(updatedExpenses);
    const updatedTotalValue = updateExpenses(updatedExpenses);
    dispatchUpdatedExpenses(updatedTotalValue);
  }

  return (
    <button
      type="button"
      onClick={ () => deleteExpense() }
      data-testid="delete-btn"
    >
      Deletar
    </button>);
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpensesList: (updatedList) => (
    dispatch(removeExpense(updatedList))
  ),
  dispatchUpdatedExpenses: (value) => dispatch(updateTotalExpenses(value)),
});

DeleteButton.propTypes = {
  expenses: arrayOf(object),
  id: number,
  updateExpensesList: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
