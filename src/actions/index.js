// Coloque aqui suas actions

export const ADD_EMAIL = 'ADD_EMAIL';

export function addEmail(payload) {
  return {
    type: ADD_EMAIL,
    payload,
  };
}

export const ADD_GASTO = 'ADD_GASTO';

export function addGasto(payload) {
  return {
    type: ADD_GASTO,
    payload,
  };
}
