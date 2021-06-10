export default async function fetchCurrenciesApi() {
  const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await getCurrencies.json();
  delete currencies.USDT;
  return currencies;
}
