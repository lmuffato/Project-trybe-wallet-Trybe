export default async function fetchCurrency() {
  const currencyResponse = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json());
  return currencyResponse;
}
