/* export default async function fetchCurrenciesApi() {
  const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await getCurrencies.json();
  delete currencies.USDT;
  return currencies;
} */

/* export const getCurrenciesAPI = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
); */

export const getCurrenciesAPI = async () => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(endPoint);
    const object = await response.json();
    delete object.USDT;
    if (object.error) throw new Error(object.error);
    return object;
  } catch (error) {
    console.log(error);
  }
};

export default getCurrenciesAPI;
