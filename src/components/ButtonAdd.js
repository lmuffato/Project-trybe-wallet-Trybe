import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonAdd({ addExpense }) {
  return (
    <button
      form="wallet-inputs"
      type="button"
      className="btn btn-primary"
      onClick={ addExpense }
    >
      Adicionar despesa
    </button>
  );
}

ButtonAdd.propTypes = { addExpense: PropTypes.func.isRequired };
