export default async function getCurrencies() {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    return request.json();
  } catch (error) {
    console.error(error);
  }
}
