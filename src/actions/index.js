// Coloque aqui suas actions

export const ADD_EMAIL = 'ADD_EMAIL';

export function addEmail(payload) {
  return {
    type: ADD_EMAIL,
    payload,
  };
}

export const ADD_GASTO = 'ADD_GASTO';

const addGasto = (payload) => (
  {
    type: ADD_GASTO,
    payload,
  }
);

export const DELETE_GASTO = 'DELETE_GASTO';

export const deleteGasto = (payload) => (
  {
    type: DELETE_GASTO,
    payload,
  }
);

export function dispatchAddGasto(payload) {
  return async (dispatch) => dispatch(addGasto(payload));
}
