const url = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchCurrencies() {
  try {
    const currencies = await (await fetch(url)).json();
    return currencies;
  } catch (error) {
    return error;
  }
}
