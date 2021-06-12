import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpense } from '../../actions';

export default function Tbody() {
  const globalState = useSelector((state) => state);
  const { wallet: { expenses } } = globalState;
  const dispatch = useDispatch();
  const currencyUsed = ({ exchangeRates, currency }) => exchangeRates[currency]
    .name.trim().split('/');
  const conversionCurrency = ({ exchangeRates, currency }) => {
    const regex = /\/\w+/gi;
    try {
      const value = exchangeRates[currency].name.match(regex)[0].replace('/', '').trim();
      return value;
    } catch (e) {
      return 'Real';
    }
  };
  const exchangeUsed = (expense) => +expense.exchangeRates[expense.currency]
    .ask;
  const convertedValue = (expense) => (+expense.value * exchangeUsed(expense))
    .toFixed(2);
  const delExpense = (event) => {
    const id = event.target.parentNode.parentNode.getAttribute('id');
    dispatch(removeExpense(id));
  };
  return (
    <tbody>
      { expenses.map((expense) => (
        <tr key={ expense.id } id={ expense.id }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{currencyUsed(expense)[0]}</td>
          <td>{exchangeUsed(expense).toFixed(2)}</td>
          <td>{convertedValue(expense)}</td>
          <td>{conversionCurrency(expense)}</td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ delExpense }
            >
              Deletar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
