import React from 'react';
import { useSelector } from 'react-redux';
import headers from './headers';

const Table = () => {
  const expenses = useSelector((state) => state.wallet.expenses);
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
            <td>{ exp[0].description }</td>
            <td>{ exp[0].tag }</td>
            <td>{ exp[0].method }</td>
            <td>{ exp[0].valueOriginal }</td>
            <td>{ exp[0].currency }</td>
            <td>{ exp[0].method }</td>
            <td>{ parseFloat(exp[0].value).toFixed(2) }</td>
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
};

export default Table;
