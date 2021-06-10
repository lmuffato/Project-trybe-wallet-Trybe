import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../../actions';

const renderExpense = (expense, dispatch) => {
  const { id, description, tag, method, exchangeRates, value, currency } = expense;
  const exchangeRate = Number(exchangeRates[currency].ask);
  const convertedValue = (Number(value) * exchangeRate).toFixed(2);

  return (
    <tr>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{value}</td>
      <td>{exchangeRates[currency].name}</td>
      <td>{exchangeRate.toFixed(2)}</td>
      <td>{convertedValue}</td>
      <td>Real</td>
      <td>
        <button
          data-testid="delete-btn"
          type="button"
          onClick={ () => dispatch(deleteExpense(id)) }
        >
          Deletar
        </button>
      </td>
    </tr>
  );
};

const ExpenseTable = () => {
  const { wallet: { expenses } } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </thead>
      <tbody>
        {expenses.map((expense) => renderExpense(expense, dispatch))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
