export const SAVE_EMAIL = 'SAVE_EMAIL';

export function saveEmail(email) {
  return { type: SAVE_EMAIL, email };
}
