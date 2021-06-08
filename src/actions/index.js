export const STORE_USER = 'STORE_USER';

export function storeUser(payload) {
  return {
    type: STORE_USER,
    payload,
  };
}
