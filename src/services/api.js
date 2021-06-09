const currencyAPI = async () => {
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const getResponse = await fetchApi.json();
    return getResponse;
  } catch (error) {
    return error;
  }
};

export default currencyAPI;
