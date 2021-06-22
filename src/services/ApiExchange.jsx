const fetchtApiExchange = async () => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const datajson = await request.json();
    return datajson;
  } catch (error) {
    console.error(error);
  }
};

export default fetchtApiExchange;
