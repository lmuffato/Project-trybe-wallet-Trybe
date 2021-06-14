// Essa parte lógica foi feita graças a análise do código do meu colega Alexandre Oliveira, tribo 10 - A
// Link: https://github.com/tryber/sd-010-a-project-trybewallet/pull/49/commits/da5d09cac9ef73c933929129811d24017da73d88

export const sumTotal = (state, dataAPI) => {
  let add = 0;

  const coins = Object.values(dataAPI)
    .filter((rate) => (rate.code === state.currency));

  const coinConvert = coins.map((coin) => coin.ask * state.value);

  add += Number(coinConvert).toFixed(2);
  return add;
};

export default sumTotal;
