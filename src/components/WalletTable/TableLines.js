import React from 'react';
import { objectOf, string, number, oneOfType } from 'prop-types';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function TableLines(props) {
  const { expense } = props;
  const { id, description, tag, method, value, currency, exchangeRates } = expense;
  const currencyNames = exchangeRates[currency].name.split('/');
  const { ask } = exchangeRates[currency];

  return (
    <tr className="table-body">
      <td>{ description }</td>
      <td>{ tag }</td>
      <td>{ method }</td>
      <td>{ value }</td>
      <td>{ currencyNames[0] }</td>
      <td>{ Number(ask).toFixed(2) }</td>
      <td>{ Number(value * ask).toFixed(2) }</td>
      <td>Real</td>
      <td>
        <EditButton id={ id } />
        <DeleteButton id={ id } />
      </td>
    </tr>
  );
}

TableLines.propTypes = {
  expense: objectOf(oneOfType([number, string])),
}.isRequired;

export default TableLines;
