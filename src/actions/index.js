import fetchAPI from '../services/currencyfetch';

export const LOGIN = 'LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';

const login = (payload) => ({
  type: LOGIN,
  payload,
});

const addCurrency = (payload) => ({
  type: ADD_CURRENCY,
  payload,
});

export const fetchAPIThunk = () => (dispatch) => {
  fetchAPI().then((res) => {
    dispatch(addCurrency({
      currencies: res,
    }));
  });
};

export default login;

// const loginAction = (payload) => ({ type: LOGIN, payload });
// export default loginAction;
