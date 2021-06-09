const dataApi = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  try {
    const request = await fetch(dataApi);
    const data = await request.json();
    return data;
  } catch (error) {
    throw error('Request failed');
  }
};

export default getCurrencies;
