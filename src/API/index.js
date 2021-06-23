const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export default async function RESPONSE_API() {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}
