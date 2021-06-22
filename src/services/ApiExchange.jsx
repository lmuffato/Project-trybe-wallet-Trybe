/*
// PARA RETORNAR A API EM OUTRO COMPONENTE
async fetchApiExchange() {
  console.log( await fetchtest() );
}

// import fetchtest from '../services/ApiExchange';
*/

const fetchtest = async () => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const datajson = await request.json();
    return datajson;
  } catch (error) {
    console.error(error);
  }
};

export default fetchtest;
