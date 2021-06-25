// solicitação a API

export const currrenciesApi = async () => {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await fetchApi.json();
  return result;
};

export const coinsFilter = (result) => {
  const array = Object.keys(result).filter(
    (key) => key !== 'USDT',
  );
  return array.map((currency) => {
    const { code } = result[currency];
    return code;
  });
};

// logica para fazer o filtro das moedas
