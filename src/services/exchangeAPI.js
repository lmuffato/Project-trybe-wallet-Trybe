const exchangeAPI = async () => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(endpoint).then((data) => data.json());
  const data = await request;
  console.log(data);
  return data;
};

export default exchangeAPI;
