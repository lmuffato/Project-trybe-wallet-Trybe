export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const GET_EXPENSE = 'GET_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export function saveEmail(email) {
  return { type: SAVE_EMAIL, email };
}

export function saveExpense(expenseDetails) {
  return { type: SAVE_EXPENSE, expenseDetails };
}

export function deleteExpense(updatedExpense) {
  return { type: DELETE_EXPENSE, updatedExpense };
}

export function getExpense(getExpenseDetails) {
  return { type: GET_EXPENSE, getExpenseDetails };
}

export function editExpense(editedExpenses) {
  return { type: EDIT_EXPENSE, editedExpenses };
}
