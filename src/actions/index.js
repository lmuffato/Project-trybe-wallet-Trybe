// Coloque aqui suas actions
export const ADD_GASTO = 'ADD_GASTO';
export const REMOVE_GASTO = 'REMOVE_GASTO';
export const EDITAR_GASTO = 'EDITAR_GASTO';
export const VISUALIZA_GASTO_TOTAL = 'VISUALIZA_GASTO_TOTAL';
export const ADD_EMAIL = 'ADD_EMAIL';

export const addGasto = (payload) => ({
  type: ADD_GASTO,
  payload,
});
