import currencyAPI from '../services/api';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const WALLET_CURRENCIES = 'WALLET_CURRENCIES';
export const FAILED_CURRENCIES = 'FAILED_CURRENCIES';

const filterCurrencies = (currencies) => {
  const filteredCurrencies = Object.keys(currencies).filter(
    (currency) => currency !== 'USDT',
  );

  return filteredCurrencies.map((currency) => {
    const { code } = currencies[currency];
    return code;
  });
};

const requestCurrency = () => ({ type: REQUEST_CURRENCIES });

const walletCurrencies = (payload) => ({
  type: WALLET_CURRENCIES,
  payload,
});

const failedRequestCurrencies = (payload) => ({
  type: FAILED_CURRENCIES,
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(requestCurrency());
  try {
    const currencies = await currencyAPI();
    const currenciesCodes = filterCurrencies(currencies);
    dispatch(walletCurrencies(currenciesCodes));
  } catch (error) {
    dispatch(failedRequestCurrencies(error));
  }
};

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});
