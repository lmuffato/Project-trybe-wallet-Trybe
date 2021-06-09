import React from 'react';
import { useDispatch } from 'react-redux';
import pagamento from './pagamento';
import tag from './tag';
import Label from './Label';
import Select from './Select';

const Form = () => {
  const [moedas, setMoedas] = React.useState([]);
  const dispatch = useDispatch();

  const reqFetchMoeda = async () => {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const resposta = await fetch(endpoint).then((resp) => resp.json());
    const moedasArr = Object.keys(resposta);
    const moedasFiltradas = moedasArr.filter((moeda) => moeda !== 'USDT');
    dispatch({
      type: 'SET_WALLET',
      payload: { currencies: moedasFiltradas },
    });
    setMoedas(moedasFiltradas.map((moeda) => (
      {
        name: moeda,
      }
    )));
  };

  React.useEffect(() => {
    reqFetchMoeda();
  }, []);

  return (
    <div>
      <form>
        <Label htmlfor="valor" type="number" label="Valor" />
        <Label htmlfor="descricao" type="text" label="Descrição" />
        <Select htmlfor="moeda" label="Moeda" options={ moedas } />
        <Select
          htmlfor="pagamento"
          label="Método de pagamento"
          options={ pagamento }
        />
        <Select htmlfor="tag" label="Tag" options={ tag } />
      </form>
    </div>
  );
};

export default Form;
