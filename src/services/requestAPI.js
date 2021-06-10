const requestApi = async () => {
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await fetchApi.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export default requestApi;
