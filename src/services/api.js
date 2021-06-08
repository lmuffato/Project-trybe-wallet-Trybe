export default async function getCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  return response.json();
}
