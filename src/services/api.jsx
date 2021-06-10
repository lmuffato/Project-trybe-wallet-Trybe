const API = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPI = async () => {
  const response = await fetch(API);
  const movies = await response.json();
  return movies;
};

export default fetchAPI;
