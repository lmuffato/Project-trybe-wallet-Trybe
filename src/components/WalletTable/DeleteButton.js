import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, number, func, bool } from 'prop-types';
import { updateExpense, updateTotalExpenses } from '../../actions';
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

  const { isEditing } = props;

  return (
    <button
      type="button"
      onClick={ () => deleteExpense() }
      data-testid="delete-btn"
      disabled={ isEditing }
    >
      Deletar
    </button>);
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  isEditing: state.edit.editing,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpensesList: (updatedList) => (
    dispatch(updateExpense(updatedList))
  ),
  dispatchUpdatedExpenses: (value) => dispatch(updateTotalExpenses(value)),
});

DeleteButton.propTypes = {
  expenses: arrayOf(object),
  id: number,
  updateExpensesList: func,
  isEditing: bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
