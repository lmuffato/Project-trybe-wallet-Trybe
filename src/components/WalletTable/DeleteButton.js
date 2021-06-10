import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, number, func } from 'prop-types';
import { removeExpense } from '../../actions';

function DeleteButton(props) {
  function deleteExpense() {
    const { expenses, id, updateExpensesList } = props;
    const updatedList = expenses.filter((expense) => expense.id !== id);
    const updatedTotal = updatedList.reduce((acc, obj) => {
      const { exchangeRates, currency, value } = obj;
      const totalValue = acc + Number((value * (exchangeRates[currency].ask)).toFixed(2));
      return totalValue;
    }, 0);
    updateExpensesList(updatedList, updatedTotal);
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
  updateExpensesList: (updatedList, updatedTotal) => (
    dispatch(removeExpense(updatedList, updatedTotal))
  ),
});

DeleteButton.propTypes = {
  expenses: arrayOf(object),
  id: number,
  updateExpensesList: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
