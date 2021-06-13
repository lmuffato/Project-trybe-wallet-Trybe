export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';

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

export const fetchThunk = () => async (dispatch) => {
  const responseFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJSON = await responseFetch.json();
  console.log(responseJSON);
  dispatch(getCurrencies(responseJSON));
};
