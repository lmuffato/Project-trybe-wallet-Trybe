export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export function saveEmail(email) {
  return { type: SAVE_EMAIL, email };
}

export function saveExpense(expenseDetails) {
  return { type: SAVE_EXPENSE, expenseDetails };
}
