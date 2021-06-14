const moneyURLAPI = 'https://economia.awesomeapi.com.br/json/all';
// segui exemplo da aula 16.4
const getCurrentMoneyAPILocation = () => (
  fetch(moneyURLAPI)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json)
          : Promise.reject(json)))
    ))
);

export default getCurrentMoneyAPILocation;
