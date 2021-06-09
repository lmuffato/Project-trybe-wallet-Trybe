export default async function fetchCurrencies() {
  const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await requestAPI.json();
  delete response.USDT;
  return response;
}
