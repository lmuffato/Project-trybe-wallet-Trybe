import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Expense extends React.Component {
  render() {
    const {
      description,
      value,
      tag,
      method,
      currency,
      exchangeRates,
      deleteCost,
      id,
      expenses,
    } = this.props;
    const currencyName = exchangeRates[currency].name.split('/')[0];
    const exchangeRateUsed = exchangeRates[currency].ask;
    const exchangeRateUsedFloat = parseFloat(exchangeRateUsed).toFixed(2);
    const valueInBRL = parseFloat(exchangeRateUsed * value).toFixed(2);
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currencyName}</td>
        <td>{exchangeRateUsedFloat}</td>
        <td>{valueInBRL}</td>
        <td>Real</td>
        <td>
          <button
            data-testid="delete-btn"
            type="button"
            onClick={ () => deleteCost(id, expenses) }
          >
            Apagar
          </button>
        </td>
      </tr>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCost: (id, expenses) => dispatch(deleteExpense(id, expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expense);

Expense.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
  tag: PropTypes.string,
  method: PropTypes.string,
  currency: PropTypes.string,
  exchangeRates: PropTypes.object,
  deleteExpense: PropTypes.func,
}.isRequired;
