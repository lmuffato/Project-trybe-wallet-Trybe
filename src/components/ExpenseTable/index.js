import React from 'react';
import { useSelector } from 'react-redux';

const renderExpense = ({ description, category, payment }) => (
  <tr>
    <td>{description}</td>
    <td>{category}</td>
    <td>{payment}</td>
    <td>{description}</td>
    <td>{description}</td>
  </tr>
);

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
