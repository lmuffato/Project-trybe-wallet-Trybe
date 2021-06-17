import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import updateAction from '../../actions/update.action';
import { END_POINT } from '../../common/def';
import getCurrency from '../../services/api';
import AddExpenseButton from '../AddExpenseButton';
import LabelTag from './LabelTag';
import LabelMethodsPay from './LabelMethodsPay';
import LabelValue from './LabelValue';
import LabelDescription from './LabelDescription';

export default function ExpenseForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function updateKeys() {
      const keys = await getCurrency(END_POINT);
      dispatch(updateAction(keys));
    }
    updateKeys();
  }, []);
  const { currencies } = useSelector((state) => state.wallet);
  const [coin, setCoin] = useState('USD');
  localStorage.setItem('currency', coin);

  return (
    <form>
      <LabelValue />
      <LabelDescription />
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" value={ coin } onChange={ (e) => setCoin(e.target.value) }>
          { currencies.map((moeda) => (
            <option key={ moeda } value={ moeda }>{moeda}</option>
          ))}
        </select>
      </label>
      <LabelMethodsPay />
      <LabelTag />
      <AddExpenseButton />
    </form>
  );
}
