import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const NewExpense = () => {
  const valor = document.querySelector('#valor');
  const descricao = document.querySelector('#descricao');
  const moeda = document.querySelector('#moeda');
  const pagamento = document.querySelector('#pagamento');
  const tag = document.querySelector('#tag');
  const expenses = useSelector((state) => state.wallet.expenses);
  const total = useSelector((state) => state.wallet.total);
  const dispatch = useDispatch();
  const qtd = useSelector((state) => state.wallet.qtd);
  const pickID = () => {
    dispatch({ type: 'ADD_QTD' });
    return qtd;
  };

  const sendInfos = (objKeys, id, key) => {
    dispatch({
      type: 'NEW_EXPENSE',
      payload: {
        expenses: [{ ...expenses }, { id: expenses.length,
          value: (valor.value * objKeys.ask).toFixed(2),
          currency: moeda.value,
          method: pagamento.value,
          tag: tag.value,
          description: descricao.value,
          exchangeRates: objKeys.ask,
          key }],
        total: total + +((valor.value * objKeys.ask).toFixed(2)) },
    });
  };

  const handleClick = async () => {
    const endpoint = `https://economia.awesomeapi.com.br/last/${moeda.value}-BRL`;
    const response = await fetch(endpoint).then((resp) => resp.json());
    const key = `${moeda.value}BRL`;
    const objKeys = response[`${moeda.value}BRL`];
    sendInfos(objKeys, pickID(), key);
  };

  return (
    <>
      <button type="button" onClick={ handleClick }>Adicionar despesa</button>
    </>
  );
};

export default NewExpense;
