const fetchAPI = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const results = await response.json();
  return results;
};

export default fetchAPI;
