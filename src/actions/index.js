import getAPICurrency from '../services/currencyAPI';

export const USERLOGIN = 'user_Login';
export const CURRENCIES = 'currencies';

export default function userLogin(values) {
  return {
    type: USERLOGIN,
    payload: values,
  };
}

export function currencyFind(currency) {
  return {
    type: CURRENCIES,
    payload: currency,
  };
}

export const fetchCurrency = () => async (dispatch) => {
  const resultAPI = await getAPICurrency();
  delete resultAPI.USDT;
  const result = Object.values(resultAPI);
  return dispatch(currencyFind(result));
};
