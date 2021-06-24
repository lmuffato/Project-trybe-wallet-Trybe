import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteGasto } from '../actions';

function Tr({ exchange, expense, currency, valueC, removeGasto }) {
  return (
    <tr key={ expense.id }>
      <td>{expense.description}</td>
      <td>{expense.tag}</td>
      <td>{expense.method}</td>
      <td>{expense.value}</td>
      <td>{currency}</td>
      <td>{exchange}</td>
      <td>{valueC}</td>
      <td>Real</td>
      <td>
        <button type="submit" data-testid="edit-btn">Editar</button>
        <button
          type="submit"
          data-testid="delete-btn"
          onClick={ () => removeGasto(expense.id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

Tr.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
      exchangeRates: PropTypes.objectOf(PropTypes.object),
    }),
  ),
  removeGasto: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  removeGasto: (payload) => dispatch(deleteGasto(payload)),
});
export default connect(null, mapDispatchToProps)(Tr);
