import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const NewExpense = () => {
  const valor = document.querySelector('#valor');
  const descricao = document.querySelector('#descricao');
  const moeda = document.querySelector('#moeda');
  const pagamento = document.querySelector('#pagamento');
  const tag = document.querySelector('#tag');
  const total = useSelector((state) => state.wallet.total);
  const dispatch = useDispatch();
  const qtd = useSelector((state) => state.wallet.qtd);
  const pickID = () => {
    dispatch({ type: 'ADD_QTD' });
    return qtd;
  };

  const sendInfos = (objKeys, id) => {
    dispatch({
      type: 'NEW_EXPENSE',
      payload: { id,
        value: valor.value,
        currency: moeda.value,
        method: pagamento.value,
        tag: tag.value,
        description: descricao.value,
        exchangeRates: objKeys.ask,
        total: total + parseFloat(valor.value) },
    });
  };

  const handleClick = async () => {
    const endpoint = `https://economia.awesomeapi.com.br/last/${moeda.value}-BRL`;
    const response = await fetch(endpoint).then((resp) => resp.json());
    const objKeys = response[`${moeda.value}BRL`];
    sendInfos(objKeys, pickID());
  };

  return (
    <button type="button" onClick={ handleClick }>Adicionar despesa</button>
  );
};

export default NewExpense;
