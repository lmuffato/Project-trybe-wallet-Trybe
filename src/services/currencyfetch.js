const fetchAPI = async () => {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const getResponse = await fetchApi.json();
  return getResponse;
};
export default fetchAPI;
