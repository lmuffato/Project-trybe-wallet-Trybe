function totalExpenses(expenses) {
  if (!expenses.length) return 0;

  const totalExpense = expenses.reduce((total, payload) => {
    const { currency, value } = payload;
    const ask = parseFloat(payload.exchangeRates[currency].ask);
    const expense = value * ask;
    const newTotal = total + expense;

    return newTotal;
  }, 0);

  return parseFloat(totalExpense.toFixed(2));
}

export default totalExpenses;
