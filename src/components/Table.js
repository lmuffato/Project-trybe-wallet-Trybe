import React from 'react';
import PropTypes from 'prop-types';
import headers from './headers';

const Table = ({ expenses, loading }) => {
  if (!loading) {
    return (
      <table>
        <thead>
          <tr>
            { headers.map((th) => (
              <th key={ th }>{ th }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((exp, index) => (
            <tr key={ index }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              <td>{ exp.valueOriginal }</td>
              <td>{ exp.currency }</td>
              <td>{ exp.method }</td>
              <td>{ parseFloat(exp.value).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
  return (<p>Adicione uma nova despesa!</p>);
};

export default Table;

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
