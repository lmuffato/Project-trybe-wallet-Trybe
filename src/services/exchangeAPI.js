export const getExchange = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response
        .json()
        .then((data) => Promise.resolve(data))))
    .catch((error) => console.log(error))
);
console.log(getExchange());

export default getExchange;
