import React from 'react';
import { useSelector } from 'react-redux';

import elements from '../services/inputs';

const Table = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const renderTBody = () => expenses.map((expense) => {
    const {
      id, description, method,
      value, tag, exchangeRates,
      currency, coin,
    } = expense;
    const { ask, name } = exchangeRates[currency];
    const convertedValue = (value * ask).toFixed(2);
    const cointConverted = name.split('/')[0];

    return (
      <tbody key={ id }>
        <tr>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{coin}</td>
          <td>{parseFloat(ask).toFixed(2)}</td>
          <td>{cointConverted}</td>
          <td>{convertedValue}</td>
          <td>Real</td>
        </tr>
      </tbody>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          {elements.th.map((th) => (
            <th key={ th }>{th}</th>
          ))}
        </tr>
      </thead>
      {renderTBody()}
    </table>
  );
};

export default Table;
