export const USER_EMAIL = 'USER_EMAIL';
export const USER_PASSWORD = 'USER_PASSWORD';
export const EXPENSES_ADD = 'EXPENSES_ADD'; // Onde as despesas serão salvas
export const CURRENCY = 'CURRENCY';

export const CURRENCIES = 'CURRENCIES';

export const EXPENSES_ID = 'EXPENSES_ID';
export const EXPENSES_VALUES = 'EXPENSES_VALUES';
export const EXPENSES_DESCRIPTIONS = 'EXPENSES_DESCRIPTIONS';
export const EXPENSES_TAG = 'EXPENSES_TAG';
export const PAYMENT_METHOD = 'PAYMENT_METHOD';

export const SUM_EXPENSES = 'SUM_EXPENSES';

export const CLEAR_INPUTS = 'CLEAR_INPUTS';

export const inputEmail = (payload) => (
  { type: USER_EMAIL, payload }
);

export const inputPassword = (payload) => (
  { type: USER_PASSWORD, payload }
);

export const addExpenses = (payload) => (
  { type: EXPENSES_ADD, payload }
);

export const expensesCurriency = (payload) => (
  { type: CURRENCY, payload }
);

export const currencies = (payload) => (
  { type: CURRENCIES, payload }
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

export const sumExpenses = (payload) => (
  { type: SUM_EXPENSES, payload }
);

export const clearInputs = (payload) => (
  { type: CLEAR_INPUTS, payload }
);
