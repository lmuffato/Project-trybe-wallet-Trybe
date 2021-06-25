// Coloque aqui suas action

export const LOGIN = 'LOGIN';
export const CURRENCY = 'CURRENCY';
export const EXPENSES = 'EXPENSES';
export const loginAction = (email) => ({ type: LOGIN, email });
export const walletCurrency = (values) => ({ type: CURRENCY, values });
export const walletExpenses = (values) => ({ type: EXPENSES, values });
