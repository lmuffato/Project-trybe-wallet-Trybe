export default async function fetchAwesomeApi() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();

  console.log(currencies);

  return currencies;
}
