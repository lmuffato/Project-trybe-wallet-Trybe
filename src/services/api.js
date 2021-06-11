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

// import axios from 'axios';

// const getCurrency = async (url) => {
//   const { data } = await axios.get(url);
//   const keys = Object.keys(data);
//   const filterKeys = keys.filter((key) => key !== 'USDT');
//   return filterKeys;
// };

// export default getCurrency;
