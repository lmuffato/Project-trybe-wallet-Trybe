const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export default async function requestApi() {
  const request = await fetch(URL_API);
  const response = await request;
  const result = response.json();
  return result;
}
