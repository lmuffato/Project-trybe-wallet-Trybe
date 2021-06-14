const CURRENCIES_API_URL = 'https://economia.awesomeapi.com.br/json/all';

async function getCurrencies() {
  try {
    const res = await fetch(CURRENCIES_API_URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getCurrencies;
