const getAPI = async () => {
  const API = await fetch('https://economia.awesomeapi.com.br/json/all');
  const APIjson = await API.json();
  return APIjson;
};

export default getAPI;
