const getAsk = async (curr) => {
  const endpoint = `https://economia.awesomeapi.com.br/json/${curr}-BRL`;
  const response = await fetch(endpoint);
  const json = await response.json();
  const arr = json[0];
  const algo = arr.ask;
  const inteiro = +(parseFloat(algo).toFixed(2));
  return inteiro;
};

export default getAsk;
