import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import walletThunks from '../thunks/wallet';

class Expense extends Component {
  handleCLick = ({ target: { id } }) => {
    const { removeExpense } = this.props;
    removeExpense(id);
  };

  render() {
    const {
      id,
      expense: {
        description,
        tag,
        method,
        value,
        currencyName,
        exchange,
        convertedValue,
      },
    } = this.props;
    return (
      <tr id={ id }>
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
            // data-testid="delete-btn"
            aria-label="Editar despesa"
            id={ id }
          />
          <button
            type="button"
            className="bi bi-trash-fill"
            data-testid="delete-btn"
            aria-label="Editar despesa"
            id={ id }
            onClick={ this.handleCLick }
          />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenseId) => dispatch(walletThunks.removeExpense(expenseId)),
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
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
