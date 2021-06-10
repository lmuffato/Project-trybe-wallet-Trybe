const BASE_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCoinsFromApi = async () => {
  const endpoint = await fetch(BASE_API);
  const response = await endpoint.json();
  return response;
};

export const deleteUSDT = (response) => {
  const filter = Object.keys(response).filter(
    (eachKey) => eachKey !== 'USDT',
  );
  return filter.map((coin) => {
    const { code } = response[coin];
    return code;
  });
};
