export default async function getCoins() {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coins = await data.json();
  return coins;
}
