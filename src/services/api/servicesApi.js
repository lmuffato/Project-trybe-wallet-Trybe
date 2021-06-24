export default fetchByCurrency = () => { // nova requisição contendo o valor id do item selecionado.
  fetch("https://economia.awesomeapi.com.br/json/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
