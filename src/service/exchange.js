const exchange = async () => {
  try {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await data.json();
    return result;
  } catch (error) {
    return Error(error);
  }
};

export default exchange;

// tratamento de promise async/await: https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a
