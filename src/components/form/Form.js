import React, { useState } from 'react';
import InputExpense from './inputs/InputExpense';
import InputDescription from './inputs/InputDescription';
import SelectCategoy from './selects/selectCategory';
import SelectPayment from './selects/selectPayment';
import SelectCoin from './selects/selectCoin';

function Form() {
  const INITIAL_STATE = {
    expense: '0', coin: '', payment: '', category: '', description: '',
  };
  const [inputForm, setInputForm] = useState(INITIAL_STATE);
  const handleInput = ({ target: { name, value } }) => {
    setInputForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const { expense, description, coin, payment, category } = inputForm;

  return (
    <form className="wallet-form">
      <InputExpense
        value={ expense }
        setValue={ handleInput }
      />

      <InputDescription
        value={ description }
        setValue={ handleInput }
      />

      <SelectCoin valueState={ coin } setValue={ handleInput } />

      <SelectPayment
        valueState={ payment }
        setValue={ handleInput }
      />

      <SelectCategoy
        valueState={ category }
        setValue={ handleInput }
      />
    </form>
  );
}

export default Form;
