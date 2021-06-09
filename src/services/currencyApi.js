const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrency = () => (
  fetch(`${CURRENCY_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrency;
