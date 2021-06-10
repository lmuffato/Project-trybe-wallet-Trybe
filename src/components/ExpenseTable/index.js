import React from 'react';
import { useSelector } from 'react-redux';

const renderExpense = (expense, currencies) => {
  const { description, tag, method, exchangeRates, value, currency } = expense;
  const convertedValue = (Number(value) * Number(exchangeRates)).toFixed(2);
  // const convertCurrency = currencies
  //   .find(({ code }) => currency === code).name.split('/')[0];

  return (
    <tr>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{value}</td>
      {/* <td>{convertCurrency}</td> */}
      <td>{Number(exchangeRates).toFixed(2)}</td>
      <td>{convertedValue}</td>
      <td>Real</td>
    </tr>
  );
};

const ExpenseTable = () => {
  const { wallet: { expenses, currencies } } = useSelector((state) => state);
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
        {expenses.map((expense) => renderExpense(expense, currencies))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
