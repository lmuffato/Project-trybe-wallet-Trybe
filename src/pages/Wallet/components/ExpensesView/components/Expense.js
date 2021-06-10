import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../../../../../actions';

function Expense({ data, removeExpense }) {
  const {
    id,
    description,
    tag,
    method,
    value,
    currency,
    exchangeRates,
  } = data;

  const currencyName = exchangeRates[currency].name.split('/')[0];
  const exchange = Number(exchangeRates[currency].ask).toFixed(2);
  const convertedValue = (
    value * exchangeRates[currency].ask
  ).toFixed(2);

  return (
    <tr key={ id }>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{value}</td>
      <td>{currencyName}</td>
      <td>{exchange}</td>
      <td>{convertedValue}</td>
      <td>Real</td>
      <td>
        [Editar]
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => removeExpense(id) }
        >
          X
        </button>
      </td>
    </tr>
  );
}

Expense.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }),
  removeExpense: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(deleteExpense(payload)),
});

export default connect(null, mapDispatchToProps)(Expense);
