export default async function getCurrencies() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
