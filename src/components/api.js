const url = 'https://economia.awesomeapi.com.br/json/all';
const fetchApi = async () => {
  const fetchResponse = await fetch(url);
  const jsonResponse = await fetchResponse.json();
  return jsonResponse;
};

export default fetchApi;
