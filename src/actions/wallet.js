import getApi from '../services/Api';

export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const getCurrency = () => ({
  type: GET_CURRENCY,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const apiThunk = () => (dispatch) => {
  dispatch(getCurrency());
  getApi()
    .then((response) => {
      const apiData = Object.values(response);
      dispatch(getCurrencySuccess(apiData));
    });
};
