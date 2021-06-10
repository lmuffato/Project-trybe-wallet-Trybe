const sumExpensesTotal = (expensesArray) => {
  const extractValueExpenses = expensesArray
    .map(({ currency, exchangeRates, value }) => {
      const exchangeRate = exchangeRates[currency].ask;
      const convertedValue = parseFloat((exchangeRate * value).toFixed(2));
      return convertedValue;
    });
  const sumValueExpenses = extractValueExpenses
    .reduce((curr, acc) => curr + acc);
  const value = sumValueExpenses.toFixed(2);
  return (value);
};

export default sumExpensesTotal;
