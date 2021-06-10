const CURRENCES_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrences = () => (
  fetch(CURRENCES_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrences;
