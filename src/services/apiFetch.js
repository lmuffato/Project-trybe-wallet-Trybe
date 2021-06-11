const fetchApi = async () => {
  const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const apiJSON = await getApi.json();
  return apiJSON;
};

export default fetchApi;
