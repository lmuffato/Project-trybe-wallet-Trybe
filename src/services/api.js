// Impossibilitado pelo avaliador da Trybe em fazer a requisição
// com o uso do axios. Logo, fiz com aquela merda ali embaixo, mas
// o axios passou.

// import axios from 'axios';

// async function getCurrency(url) {
//   try {
//     const response = await axios.get(url)
//       .then((result) => result.data)
//       .then((currency) => Object.keys(currency));
//     return response.filter((currency) => currency !== 'USDT');
//   } catch (error) {
//     return console.log(`Ocorreu um erro - ${error}`);
//   }
// }

// export default getCurrency;

export default async function getCurrency(url) {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((currency) => Object.keys(currency));
  return response.filter((currency) => currency !== 'USDT');
}
