export default currenciesAPI = async () => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchAPI.json();
  console.log(response);
  return response;
};

export const fields = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
