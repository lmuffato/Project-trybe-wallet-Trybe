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

// Referência para a função filteringExpenses:
// adaptada da ideia do colega João Andrade: https://github.com/tryber/sd-010-a-project-trybewallet/pull/13
