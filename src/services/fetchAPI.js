const url = 'https://economia.awesomeapi.com.br/json/all';

async function fetchAPI() {
  const response = await fetch(url);
  const coins = await response.json();
  return coins;
}

export default fetchAPI;
