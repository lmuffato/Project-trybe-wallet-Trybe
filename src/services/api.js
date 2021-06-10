export async function getCodesFromCoins() {
  const coins = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((data) => data);
  const extractCodesFromCoins = Object.keys(coins);
  const coinsCodes = extractCodesFromCoins.filter((coin) => coin !== 'USDT');
  return coinsCodes;
}

export const getCurrentExchangeRates = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok
          ? Promise.resolve(json)
          : Promise.reject(json)))
    ))
);
