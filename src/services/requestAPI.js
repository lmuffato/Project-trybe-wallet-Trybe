const requestAPI = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const obj = await response.json();
    return obj;
  } catch (error) {
    return new Error(error);
  }
};

export default requestAPI;
