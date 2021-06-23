// Endpoint: https://economia.awesomeapi.com.br/json/all

const reqAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const getCurrency = await response.json();
  console.log(getCurrency);
  return getCurrency;
};

export default reqAPI;
