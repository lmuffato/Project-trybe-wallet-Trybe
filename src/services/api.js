const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  try {
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    throw error('Failed to complete the request');
  }
};

export default getCurrencies;
