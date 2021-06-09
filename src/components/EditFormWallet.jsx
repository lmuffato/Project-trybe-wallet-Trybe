import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';

import elements from '../services/inputs';
import { deleteExpense, editExpenses, fetchCurrency } from '../actions';

const EditFormWallet = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const { wallet } = globalState;
  const { inputs, selects, options } = elements;
  const initialExpense = { ...wallet.expenses[wallet.id] };
  const [expense, setExpense] = useState(initialExpense);
  const updatedOptions = [wallet.currencies, ...options];

  const editExpense = () => {
    const newExpenses = [...wallet.expenses
      .filter(({ id }) => id !== wallet.id), expense].sort((a, b) => a.id - b.id);
    dispatch(deleteExpense(newExpenses));
    dispatch(editExpenses(false));
  };
  const getExpense = ({ target }) => {
    const newExpense = {
      ...expense,
      [target.name]: target.value,
    };
    setExpense(newExpense);
  };

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <form>
      {inputs.map((input) => (
        <LabelInput key={ input.control } input={ input } getExpense={ getExpense } />
      ))}
      {selects.map((select, index) => (
        <LabelSelect
          key={ select.control }
          select={ select }
          options={ updatedOptions[index] }
          getExpense={ getExpense }
        />
      ))}
      <button type="button" onClick={ () => editExpense() }>
        Editar despesa
      </button>
    </form>
  );
};

export default EditFormWallet;
