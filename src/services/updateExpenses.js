export default function updateExpenses(expenses) {
  return expenses.reduce((acc, expense) => {
    const { value, currency, exchangeRates } = expense;
    const result = acc + Number((value * (exchangeRates[currency].ask)));
    return result;
  }, 0);
}
