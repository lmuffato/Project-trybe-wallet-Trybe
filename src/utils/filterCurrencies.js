function filterCurrencies(currencies) {
  const filteringCurrencies = Object.keys(currencies).filter(
    (currency) => currency !== 'USDT',
  );
  return filteringCurrencies;
}

export const filteringExpenses = (expense) => {
  const filtering = Object.values(expense.exchangeRates).filter((curr) => (
    curr.code === expense.currency));
  return filtering;
};

export default filterCurrencies;
