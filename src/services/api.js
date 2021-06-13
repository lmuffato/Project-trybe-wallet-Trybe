const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrenciesFromAPI = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export default getCurrenciesFromAPI;