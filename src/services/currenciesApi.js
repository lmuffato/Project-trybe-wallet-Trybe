const URL_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = () => fetch(URL_API)
  .then((response) => response.json())
  .then((currencies) => {
    delete currencies.USDT;

    return currencies;
  });

export default fetchCurrencies;
