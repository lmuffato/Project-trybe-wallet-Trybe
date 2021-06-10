const fetchCurrencyApi = () => (
  new Promise((resolve) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => {
        result.json().then((data) => {
          resolve(data);
        });
      });
  })
);

export default fetchCurrencyApi;
