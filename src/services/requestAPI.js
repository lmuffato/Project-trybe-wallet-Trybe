const requestApi = async () => {
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await fetchApi.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default requestApi;

export const requestApiPrice = async () => {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await fetchApi.json();
  return data;
};
