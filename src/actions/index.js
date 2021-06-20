export const USER_EMAIL = 'USER_EMAIL';
export const USER_PASSWORD = 'USER_PASSWORD';
export const EXPENSES = 'EXPENSES';
export const CURRENCIES = 'CURRENCIES';

export const inputEmail = (payload) => (
  { type: USER_EMAIL, payload }
);

export const inputPassword = (payload) => (
  { type: USER_PASSWORD, payload }
);

export const inputExpenses = (payload) => (
  { type: EXPENSES, payload }
);

export const inputCurriencies = (payload) => (
  { type: CURRENCIES, payload }
);
