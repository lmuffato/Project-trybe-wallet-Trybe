/* eslint-disable max-lines-per-function */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from './data';
import Label from './Label';
import Select from './Select';
import tag from './tag';
import pagamento from './pagamento';
import getAsk from './getAsk';

const Form = () => {
  const [coins, setCoins] = React.useState([]);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const valor = document.querySelector('#valor');
  const descricao = document.querySelector('#descricao');
  const moeda = document.querySelector('#moeda');
  const pagamentoV = document.querySelector('#pagamento');
  const tagV = document.querySelector('#tag');
  const requisicaoFetch = async () => {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const json = await fetch(endpoint).then((resp) => resp.json());
    const array = Object.keys(json);
    const filtered = array.filter((coin) => coin !== 'USDT');
    setCoins(filtered);
  };
  const handleClick = async () => {
    await dispatch({
      type: 'SET_EXPENSES',
      payload: {
        currencies: coins,
        expenses: {
          id: expenses.length,
          valueOriginal: valor.value,
          value: valor.value * await getAsk(moeda.value),
          description: descricao.value,
          currency: moeda.value,
          method: pagamentoV.value,
          tag: tagV.value,
          exchangeRates: data,
        },
        total: valor.value * await getAsk(moeda.value),
        loading: false,
      },
    });
  };
  React.useEffect(() => {
    requisicaoFetch();
  }, []);
  return (
    <form>
      <Label label="Valor" type="number" vid="valor" />
      <Label label="Descrição" type="text" vid="descricao" />
      <Select label="Moeda" options={ coins } vid="moeda" />
      <Select label="Método de pagamento" options={ pagamento } vid="pagamento" />
      <Select options={ tag } label="Tag" vid="tag" />
      <button type="button" onClick={ handleClick }>Adicionar despesa</button>
    </form>
  );
};
export default Form;
