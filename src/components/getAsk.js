const getAsk = async (curr) => {
  const endpoint = `https://economia.awesomeapi.com.br/json/${curr}-BRL`;
  const json = await fetch(endpoint).then((resp) => resp.json());
  const { ask } = json[0];
  const inteiro = +(parseFloat(ask).toFixed(2));
  return inteiro;
};

export default getAsk;
