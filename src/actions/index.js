// Coloque aqui suas actions

import requestApi, { requestApiPrice } from '../services/requestAPI';

export const LOGIN_DATA = 'LOGIN_DATA';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';
export const CURRENCIES_REQUEST_SUCESS = 'CURRENCIES_REQUEST_SUCESS';
export const CURRENCIES_REQUEST_ERROR = 'CURRENCIES_REQUEST_ERROR';
export const PRICE_REQUEST = 'PRICE_REQUEST';
export const PRICE_REQUEST_SUCESS = 'PRICE_REQUEST_SUCESS';
export const PRICE_REQUEST_ERROR = 'PRICE_REQUEST_ERROR';

// action creator

const loginAction = (state) => ({
  type: LOGIN_DATA, state });

export const currenciesRequest = () => ({
  type: CURRENCIES_REQUEST });

export const currenciesRequestSucess = (state) => ({
  type: CURRENCIES_REQUEST_SUCESS, state });

export const currenciesRequestError = (state) => ({
  type: CURRENCIES_REQUEST_ERROR, state });

export const currenciesRequestThunk = () => (dispatch) => {
  dispatch(currenciesRequest());
  requestApi().then((response) => {
    const arrayOfCurrencys = Object.keys(response);
    const filteredCoins = arrayOfCurrencys.filter((currency) => currency !== 'USDT');
    dispatch(currenciesRequestSucess(filteredCoins));
  })
    .catch((error) => { dispatch(currenciesRequestError(error)); });
};

export const requestPrice = () => ({
  type: PRICE_REQUEST,
});

export const requestPriceSucess = (state) => ({
  type: PRICE_REQUEST_SUCESS, state,
});

export const requestApiPriceThunk = (state) => (dispatch) => {
  dispatch(requestPrice());
  requestApiPrice().then((response) => {
    const { qtd, ...spread } = state;
    const priceObj = {
      id: qtd,
      ...spread,
      exchangeRates: response,
    };
    dispatch(requestPriceSucess(priceObj));
  });
};

export default loginAction;
