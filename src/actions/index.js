// Coloque aqui suas actions

// User actions for Login

export const setEmailAction = (email) => ({
  type: 'TYPED_EMAIL',
  payload: {
    email,
  },
});

export const setPasswordAction = (password) => ({
  type: 'TYPED_PASSWORD',
  payload: {
    password,
  },
});

export const emailIsValidAction = () => ({
  type: 'EMAIL_IS_VALID',
});

export const passwordIsValidAction = () => ({
  type: 'PASSWORD_IS_VALID',
});

// Wallet Actions ............................................................

export const fetchApiSuccess = (payload) => ({
  type: 'FETCH_API_SUCCESS',
  payload: {
    success: payload,
  },
});

export const fetchApiError = (payload) => ({
  type: 'FETCH_API_ERROR',
  payload: {
    error: payload,
  },
});

export const fetchApiThunk = () => async (dispatch) => {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';

  fetch(API_URL)
    .then((res) => res.json()
      .then((data) => console.log(dispatch(fetchApiSuccess(data)))))
    .catch((res) => dispatch(fetchApiError(res)));
};
