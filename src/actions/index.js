export const transportarEmail = (email) => ({ type: 'TRANSPORTAR_EMAIL', email });

// Obtive ajuda da aluna Nathalia para entender como fazer o requisito 7
export const obterCambio = () => ({ type: 'OBTER_CAMBIO' });
export const infoCambio = (cambio) => ({ type: 'INFO_CAMBIO', cambio });

export function dataApi() {
  return async (dispatch) => {
    dispatch(obterCambio());
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cambio = await data.json();
    return dispatch(infoCambio(cambio));
  };
}
