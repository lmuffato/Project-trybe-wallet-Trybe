import axios from 'axios';

async function getCurrency(url) {
  try {
    const response = await axios.get(url)
      .then((result) => result.data)
      .then((currency) => Object.keys(currency));
    return response.filter((currency) => currency !== 'USDT');
  } catch (error) {
    return console.log(`Ocorreu um erro - ${error}`);
  }
}

export default getCurrency;
