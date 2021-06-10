import React from 'react';
import { useSelector } from 'react-redux';

const TBody = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const tbodyMap = () => expenses.map((expense) => {
    const {
      id,
      description,
      method,
      value,
      tag,
      exchangeRates,
      currency,
      coin,
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
          <td>
            <button
              type="button"
              data-testid="delete-btn"
            >
              Deletar
            </button>
            <button
              type="button"
              data-testid="edit-btn"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
  return tbodyMap();
};

export default TBody;
