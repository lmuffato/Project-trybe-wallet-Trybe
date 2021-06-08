const currencyAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  return json;
};

export default currencyAPI;
