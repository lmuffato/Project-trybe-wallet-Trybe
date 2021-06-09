// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';

// action creator > funcao que retorna uma action
const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export default saveUser;
