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

export const handleConversionCurrencyName = (expense) => {
  const currencyType = filteringExpenses(expense);
  return currencyType[0].name;
};

export const handleCurrencyType = (expense) => {
  const currencyType = filteringExpenses(expense);
  return Number(currencyType[0].ask * expense.value).toFixed(2);
};

export const handleConversion = (expense) => {
  const currType = filteringExpenses(expense);
  return Number(currType[0].ask).toFixed(2);
};

export const handleRemoveExpense = (expenses, expense, removendoDespesa) => {
  if (expenses.length !== 0) {
    const removeExp = [...expenses].filter((exp) => exp.id !== expense.id);
    removendoDespesa(removeExp);
  }
};

export default filterCurrencies;

// Referência para a função filteringExpenses:
// adaptada da ideia do colega João Andrade: https://github.com/tryber/sd-010-a-project-trybewallet/pull/13
