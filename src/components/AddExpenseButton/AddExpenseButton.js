import React from 'react';
import { useDispatch } from 'react-redux';
import addExpenseAction from '../../actions/addExpense.action';
import { END_POINT } from '../../common/def';
import { getExchange } from '../../services/api';

export default function AddExpenseBUtton() {
  const dispatch = useDispatch();

  async function myItem() {
    const objStage = {
      method: localStorage.getItem('method'),
      description: localStorage.getItem('description'),
      currency: localStorage.getItem('currency'),
      value: localStorage.getItem('value'),
      tag: localStorage.getItem('tag'),
      exchangeRates: await getExchange(END_POINT),
    };
    return dispatch(addExpenseAction(objStage));
  }
  return (
    <button
      type="button"
      onClick={ myItem }
    >
      Adicionar despesa
    </button>
  );
}
