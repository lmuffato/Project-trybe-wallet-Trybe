const fetchReq = async () => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const json = await fetch(endpoint).then((resp) => resp.json());
  return json;
};

export default fetchReq;
