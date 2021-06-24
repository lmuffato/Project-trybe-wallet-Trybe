const filteringData = (data) => {
  const apiData = Object.keys(data);
  const excluedCoin = 'USDT';
  const filteredCoins = apiData.filter((each) => each !== excluedCoin);
  console.log(filteredCoins);
  return filteredCoins;
};

export default filteringData;
