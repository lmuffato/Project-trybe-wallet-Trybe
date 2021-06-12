const CURRENCY_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const currenciesApi = await fetch(CURRENCY_URL);
  const currenciesJson = await currenciesApi.json();
  const currencies = Object
    .values(currenciesJson).filter((currency) => currency.codein === 'BRL');
  return currencies;
};

const getCurrenciesObj = async () => {
  const currenciesApi = await fetch(CURRENCY_URL);
  const currenciesJson = await currenciesApi.json();
  return currenciesJson;
};

export {
  getCurrencies,
  getCurrenciesObj,
};
