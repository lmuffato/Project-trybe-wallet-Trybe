export default currenciesAPI = async () => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchAPI.json();
  console.log(response);
  return response;
};
