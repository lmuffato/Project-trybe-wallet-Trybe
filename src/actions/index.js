// Coloque aqui suas actions

export const USER = 'USER_EMAIL';

export const CURRENCIES = 'CURRENCIES';

export const EXPENSES = 'EXPENSES';

export const userAction = (payload) => ({
  type: USER,
  payload,
});
