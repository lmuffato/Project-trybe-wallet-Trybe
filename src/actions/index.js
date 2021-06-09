export const login = (email) => ({
  type: 'LOGIN',
  email,
});

export const getApi = () => ({
  type: 'GET_API',
});

export const getApiSuccess = (currencies) => ({
  type: 'GET_SUCCESS',
  payload: {
    currencies,
  },
});

export const getApiError = (error) => ({
  type: 'GET_ERROR',
  payload: {
    error,
  },
});

export const getApiThunk = () => (dispatch) => {
  dispatch(getApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => {
      res.json().then((data) => {
        dispatch(getApiSuccess(data));
      });
    })
    .catch(() => { dispatch(getApiError()); });
};
