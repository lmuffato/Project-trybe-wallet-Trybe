import React from 'react';
import { objectOf, string, number, oneOfType } from 'prop-types';
import DeleteButton from './DeleteButton';

// function convertToValue(value) {
//   return (Number(value).toFixed(2));
// }

function TableLines(props) {
  const { expense } = props;
  const { id, description, tag, method, value, currency, exchangeRates } = expense;
  const currencyNames = exchangeRates[currency].name.split('/');
  const { ask } = exchangeRates[currency];

  return (
    <tr>
      <td>
        { description }
      </td>
      <td>
        { tag }
      </td>
      <td>
        { method }
      </td>
      <td>
        {/* { `${currency} ${convertToValue(value)}` } */}
        { value }
      </td>
      <td>
        { currencyNames[0] }
      </td>
      <td>
        {/* { `R$ ${convertToValue(ask)}` } */}
        { Number(ask).toFixed(2) }
      </td>
      <td>
        {/* { `R$ ${convertToValue(value * ask)}` } */}
        { Number(value * ask).toFixed(2) }
      </td>
      <td>
        Real
      </td>
      <td>
        Editar
        <DeleteButton id={ id } />
      </td>
    </tr>
  );
}

TableLines.propTypes = {
  expense: objectOf(oneOfType([number, string])),
}.isRequired;

export default TableLines;
