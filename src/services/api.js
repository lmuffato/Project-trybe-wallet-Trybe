const fetchCurrency = () => fetch('https://economia.awesomeapi.com.br/json/all').then((res) => res.json());

export default fetchCurrency;
