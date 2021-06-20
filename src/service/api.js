export default async function fetchAPI() {
  const api = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
  return api;
}
