export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_COTATION = 'GET_COTATION';
export const ADD_DESPESA = 'ADD_DESPESA';
export const DEL_ITEM = 'DEL_ITEM';
export const EDITA_ITEM = 'EDITA_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  user: {
    email,
  },
});

export const requestAPI = () => ({ type: REQUEST_API });

export const getCotation = (data, simpleData) => (
  { type: GET_COTATION, data, simpleData });

export const addDespesa = (state) => ({ type: ADD_DESPESA, state });

export const deleteItem = (id) => ({ type: DEL_ITEM, id });

export const editaDespesas = (state, edit) => ({ type: EDITA_ITEM, state, edit });

export const updateItem = (state) => ({ type: UPDATE_ITEM, state });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((json) => {
          const { USDT, ...curr } = json;
          dispatch(getCotation(Object.keys(curr), json));
        }));
  };
}
