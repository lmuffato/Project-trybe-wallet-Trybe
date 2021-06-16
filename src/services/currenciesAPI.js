/* Esses valores devem vir da API através do endpoint: https://economia.awesomeapi.com.br/json/all. */
const url = 'https://economia.awesomeapi.com.br/json/all';

export const currenciesAPI = () => (
  fetch(`${url}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default currenciesAPI;
