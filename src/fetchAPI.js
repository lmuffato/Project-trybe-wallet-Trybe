export default function fetchAPI() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json());
}
