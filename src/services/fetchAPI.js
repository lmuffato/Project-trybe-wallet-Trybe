const endPoint = 'https://economia.awesomeapi.com.br/json/all';
const endPointRates = 'https://economia.awesomeapi.com.br/json/all';

export const fetchAPI = () => fetch(endPoint)
  .then((res) => res.json())
  .then((currencies) => {
    delete currencies.USDT;
    console.log('Fetch on.');
    return currencies;
  });
// https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object

const fetchAPIRates = () => fetch(endPointRates)
  .then((res) => res.json())
  .then((rates) => rates);

export default fetchAPIRates;
