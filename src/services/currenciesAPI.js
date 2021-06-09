const URL = 'https://economia.awesomeapi.com.br/json/all';

const getAPI = async () => {
  const result = await fetch(URL);
  return result.json();
};

export default getAPI;
