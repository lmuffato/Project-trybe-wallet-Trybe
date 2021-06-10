const fetchCurrencies = async () => {
  const requestApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await requestApi.json();
  delete response.USDT;
  return response;
};

export default fetchCurrencies;
