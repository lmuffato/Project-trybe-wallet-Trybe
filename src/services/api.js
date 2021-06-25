const walletAPI = async () => {
  const CURRENCY_URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(CURRENCY_URL);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default walletAPI;
