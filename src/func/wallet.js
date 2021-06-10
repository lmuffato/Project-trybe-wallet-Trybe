const filterCurrencies = (currencies) => {
  const filteredCurrencies = Object.keys(currencies).filter(
    (currency) => currency !== 'USDT',
  );

  return filteredCurrencies.map((currency) => {
    const { code } = currencies[currency];
    return code;
  });
};

export default filterCurrencies;
