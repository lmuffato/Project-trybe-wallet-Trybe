function filterCurrencies(currencies) {
  const filteringCurrencies = Object.keys(currencies).filter(
    (currency) => currency !== 'USDT',
  );
  return filteringCurrencies;
}

export const filteringExpense = (expense) => {
  const filtering = Object.values(expense.exchangeRates).filter((curr) => (
    curr.code === expense.currency));
  return filtering;
};

export const handleConversionCurrencyName = (expense) => {
  const currencyType = filteringExpense(expense);
  return currencyType[0].name;
};

export const handleCurrencyType = (expense) => {
  const currencyType = filteringExpense(expense);
  return Number(currencyType[0].ask * expense.value).toFixed(2);
};

export const handleConversion = (expense) => {
  const currType = filteringExpense(expense);
  return Number(currType[0].ask).toFixed(2);
};

export const handleRemove = (e, expense, removendoDespesa, expenses) => {
  e.preventDefault();
  if (expenses.length !== 0) {
    const removeExp = [...expenses].filter((exp) => exp.id !== expense.id);
    removendoDespesa(removeExp);
  }
};

export const handleEdit = (e, expense) => {
  e.preventDefault();
  console.log('hi', expense.id);
};

export default filterCurrencies;

// Referência para a função filteringExpenses:
// adaptada da ideia do colega João Andrade: https://github.com/tryber/sd-010-a-project-trybewallet/pull/13
