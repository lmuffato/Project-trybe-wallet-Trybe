// // ideia de Anderson Nascimento turma 10a realizada no exercícios dos doguinhos
// import { api, apiFail, apiSucessed } from '../actions/index';

// export function getCurrencyThunk() {
//   return (dispatch) => {
//     dispatch(api());
//     return fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((answer) => {
//         dispatch(apiSucessed(answer));
//       })
//       .catch((error) => dispatch(apiFail(error)));
//   };
// }
