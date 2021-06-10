const currenciesAPI = async () => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchAPI.json();
  return response;
};

export default currenciesAPI;
