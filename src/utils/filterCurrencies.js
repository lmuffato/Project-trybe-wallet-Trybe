function filterCurrencies(currencies) {
  const filteringCurrencies = Object.keys(currencies).filter(
    (currency) => currency !== 'USDT',
  );
  return filteringCurrencies;
}

export default filterCurrencies;
