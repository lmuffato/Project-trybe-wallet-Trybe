export const USER_EMAIL = 'USER_EMAIL';
export const USER_PASSWORD = 'USER_PASSWORD';
export const EXPENSES_ADD = 'EXPENSES_ADD'; // Onde as despesas serão salvas
export const CURRENCIES = 'CURRENCIES';
export const EXCHANGEAPI = 'EXCHANGEAPI';

export const EXPENSES_ID = 'EXPENSES_ID';
export const EXCHANGE_RATES = 'EXCHANGE_RATES';
export const EXPENSES_VALUES = 'EXPENSES_VALUES';
export const EXPENSES_DESCRIPTIONS = 'EXPENSES_DESCRIPTIONS';
export const EXPENSES_TAG = 'EXPENSES_TAG';
export const PAYMENT_METHOD = 'PAYMENT_METHOD';

export const inputEmail = (payload) => (
  { type: USER_EMAIL, payload }
);

export const inputPassword = (payload) => (
  { type: USER_PASSWORD, payload }
);

export const addExpenses = (payload) => (
  { type: EXPENSES_ADD, payload }
);

export const expensesCurriencies = (payload) => (
  { type: CURRENCIES, payload }
);

export const fetchExchangeApi = (payload) => (
  { type: EXCHANGEAPI, payload }
);

export const exchangeRatesOnBuy = (payload) => (
  { type: EXCHANGE_RATES, payload }
);

export const expensesValues = (payload) => (
  { type: EXPENSES_VALUES, payload }
);

export const expensesDescription = (payload) => (
  { type: EXPENSES_DESCRIPTIONS, payload }
);

export const paymentMethod = (payload) => (
  { type: PAYMENT_METHOD, payload }
);

export const expensesId = (payload) => (
  { type: EXPENSES_ID, payload }
);

export const expensesTag = (payload) => (
  { type: EXPENSES_TAG, payload }
);
