const url = 'https://economia.awesomeapi.com.br/json/all';

export const currencyAPI = async () => {
  const fetchRequest = await fetch(`${url}`);
  const data = await fetchRequest.json();
  return data;
};

export default currencyAPI;
