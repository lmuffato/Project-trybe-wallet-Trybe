import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import walletThunks from '../thunks/wallet';
import {
  defineEditing as defineEditingAction,
  setExpenseToEdit,
} from '../actions';

class Expense extends Component {
  editExpense = async () => {
    const { expense, defineEditing, setExpense } = this.props;
    await setExpense(expense);
    defineEditing(true);
  };

  render() {
    const {
      expense: {
        id,
        description,
        tag,
        method,
        value,
        currencyName,
        exchange,
        convertedValue,
      },
      removeExpense,
    } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>{parseFloat(exchange).toFixed(2)}</td>
        <td>{parseFloat(convertedValue).toFixed(2)}</td>
        <td>Real</td>
        <td className="buttons-expense">
          <button
            type="button"
            className="bi bi-pencil-square"
            data-testid="edit-btn"
            aria-label="Editar despesa"
            id={ id }
            onClick={ this.editExpense }
          />
          <button
            type="button"
            className="bi bi-trash-fill"
            data-testid="delete-btn"
            aria-label="Remover despesa"
            id={ id }
            onClick={ ({ target }) => removeExpense(target.id) }
          />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  inputs: state.wallet.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenseId) => dispatch(walletThunks.removeExpense(expenseId)),
  defineEditing: (bool) => dispatch(defineEditingAction(bool)),
  setExpense: (expense) => dispatch(setExpenseToEdit(expense)),
});

Expense.propTypes = {
  remove: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  expense: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currencyName: PropTypes.string,
    exchange: PropTypes.string,
    convertedValue: PropTypes.number,
    conversionCurrency: PropTypes.string,
  }).isRequired,
  reduceTotal: PropTypes.func.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
