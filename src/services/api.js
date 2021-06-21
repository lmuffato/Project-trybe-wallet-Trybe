const URL = 'http://economia.awsomeapi.com.br/json/all';

const getApi = async () => {
  const apiURL = await fetch(URL);
  return apiURL.json();
};

export default getApi;
