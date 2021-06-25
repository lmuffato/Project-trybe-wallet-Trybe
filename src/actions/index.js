// Coloque aqui suas action

export const LOGIN = 'LOGIN';
export const loginAction = (email) => ({ type: LOGIN, email });

export const CURRENCY = 'CURRENCY';
export const walletCurrency = (values) => ({ type: CURRENCY, values });

export const EXPENSES = 'EXPENSES';
export const walletExpenses = (values) => ({ type: EXPENSES, values });

export const X_EXPENSES = 'EXPENSES';
export const walletExtra = (values) => ({ type: X_EXPENSES, values });
