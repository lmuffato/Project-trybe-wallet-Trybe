export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXCHANGERATES = 'GET_EXCHANGERATES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const saveEmail = (user) => (
  { type: SAVE_EMAIL,
    user,
  }
);

export const getCurrencies = (data) => (
  { type: GET_CURRENCIES,
    data,
  }
);

export const getExchangeRates = (data) => (
  { type: GET_EXCHANGERATES,
    data,
  }
);

export const setExpenses = (data) => (
  { type: SET_EXPENSES,
    data,
  }
);

export const fetchThunk = () => async (dispatch) => {
  const responseFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJSON = await responseFetch.json();
  console.log(responseJSON);
  const currenciesArr = Object.keys(responseJSON).filter((key) => key !== 'USDT');
  const { USDT, ...exchangeRates } = responseJSON;
  dispatch(getCurrencies(currenciesArr));
  dispatch(getExchangeRates(exchangeRates));
};
