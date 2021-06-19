const URL = 'https://economia.awesomeapi.com.br/json/all';

const currencyApi = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error('Requisição falhou', error);
  }
};

export default currencyApi;
