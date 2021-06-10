const URL_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = () => fetch(URL_API)
  .then((response) => response.json())
  .then((currencies) => {
    delete currencies.USDT;
    //console.log(currencies);
    return currencies;
/*     const currencyList = [];
    Object.keys(currencies)
      .forEach((keyCurrency, index) => {
        if (keyCurrency !== 'USDT') {
          currencyList.push({ [keyCurrency]: Object.values(currencies)[index] });
        }
      });
    return currencyList; */
  });

export default fetchCurrencies;
