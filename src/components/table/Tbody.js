import React from 'react';
import { useSelector } from 'react-redux';

export default function Tbody() {
  const expensesState = useSelector(({ wallet: { expenses } }) => expenses);

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

  return (
    <tbody>
      { expensesState.map((expense) => (
        <tr key={ expense.id }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{currencyUsed(expense)[0]}</td>
          <td>{exchangeUsed(expense).toFixed(2)}</td>
          <td>{convertedValue(expense)}</td>
          <td>{conversionCurrency(expense)}</td>
          {/* <td>Real</td> */}
        </tr>
      ))}
    </tbody>
  );
}
