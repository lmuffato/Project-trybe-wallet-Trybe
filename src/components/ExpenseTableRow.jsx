import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class ExpenseTableRow extends Component {
  render() {
    const { expense, removeCurrentExpense } = this.props;
    const { description, tag, method, value, exchangeRates, currency } = expense;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>
          {Number(exchangeRates[currency].ask).toFixed(2)}
        </td>
        <td>
          {Number(
            value * exchangeRates[currency].ask,
          ).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => removeCurrentExpense(expense) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

ExpenseTableRow.propTypes = {
  expense: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  removeCurrentExpense: (expense) => dispatch(removeExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseTableRow);
