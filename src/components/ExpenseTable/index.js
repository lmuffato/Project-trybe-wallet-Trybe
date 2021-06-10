import React from 'react';
import { useSelector } from 'react-redux';

const renderExpense = (expense) => {
  const { description, tag, method, exchangeRates, value, currency } = expense;
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
    </tr>
  );
};

const ExpenseTable = () => {
  const { wallet: { expenses } } = useSelector((state) => state);
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
        {expenses.map((expense) => renderExpense(expense))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
