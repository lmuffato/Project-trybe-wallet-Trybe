import fetchApi from '../services/fetchApi';

// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (email) => (
  { type: SAVE_EMAIL, email });

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchStart = () => (
  { type: FETCH_START }
);

export const fetchSuccess = (payload) => (
  { type: FETCH_SUCCESS, payload }
);

export const fetchError = (payload) => (
  { type: FETCH_ERROR, payload }
);

const thunkFetch = () => (dispatch) => {
  dispatch(fetchStart());
  return fetchApi()
    .then(
      (data) => dispatch(fetchSuccess(data)),
      (error) => dispatch(fetchError(error.message)),
    );
};

export default thunkFetch;
