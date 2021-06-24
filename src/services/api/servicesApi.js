const fetchByCurrency = async () => {
  const res = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await res.json();
  return Object.keys(data).filter((element) => element !== 'USDT');
};

export default fetchByCurrency;
