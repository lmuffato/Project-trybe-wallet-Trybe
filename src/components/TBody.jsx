import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../actions';

const TBody = () => {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const removeExpense = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(deleteExpense(newExpenses));
  };
  const renderTBody = () => expenses.map((expense) => {
    const {
      id, description, method, value, tag, exchangeRates, currency, coin,
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
              onClick={ () => removeExpense(id) }
              data-testid="delete-btn"
            >
              Deletar
            </button>
            <button
              type="button"
              onClick={ () => removeExpense(id) }
              data-testid="edit-btn"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return renderTBody();
};

export default TBody;
