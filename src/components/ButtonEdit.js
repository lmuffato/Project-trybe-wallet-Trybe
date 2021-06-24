import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonEdit({ editExpense }) {
  return (
    <button
      form="wallet-inputs"
      type="button"
      className="btn btn-primary"
      onClick={ editExpense }
    >
      Editar despesa
    </button>
  );
}

ButtonEdit.propTypes = { editExpense: PropTypes.func.isRequired };
