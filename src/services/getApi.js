const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

function coinFilter(coins) {
  const filteredCoins = Object.keys(coins).filter(
    (coin) => coin !== 'USDT',
  );
  return filteredCoins;
}

const getCurrencies = async () => {
  try {
    const request = await fetch(ENDPOINT);
    const data = await request.json();
    return coinFilter(data);
  } catch (error) {
    throw error('Erro! Requisição falhou');
  }
};

export const getExchangeRates = async () => {
  try {
    const request = await fetch(ENDPOINT);
    const data = await request.json();
    return data;
  } catch (error) {
    throw error('Erro!');
  }
};

export default getCurrencies;
