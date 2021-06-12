export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

export const getCurrency = (currency) => ({
  type: GET_CURRENCY,
  currency,
});
