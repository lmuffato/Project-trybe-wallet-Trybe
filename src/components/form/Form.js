import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputExpense from './inputs/InputExpense';
import InputDescription from './inputs/InputDescription';
import SelectCategoy from './selects/selectCategory';
import SelectPayment from './selects/selectPayment';
import SelectCoin from './selects/selectCoin';
import { thunkFetchExchangeRates } from '../../actions';

function Form() {
  const INITIAL_STATE = {
    value: '0', currency: 'USD', method: 'debit', tag: 'Leisure', description: '',
  };
  const [inputForm, setInputForm] = useState(INITIAL_STATE);
  const handleInput = ({ target: { name, value } }) => {
    setInputForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const dispatch = useDispatch();

  const submitted = (event) => {
    event.preventDefault();
    dispatch(thunkFetchExchangeRates(inputForm));
  };
  const { value, description, currency, method, tag } = inputForm;
  return (
    <form className="wallet-form" onSubmit={ submitted }>
      <InputExpense
        value={ value }
        setValue={ handleInput }
      />
      <SelectCoin
        valueState={ currency }
        setValue={ handleInput }
      />
      <SelectPayment
        valueState={ method }
        setValue={ handleInput }
      />
      <SelectCategoy
        valueState={ tag }
        setValue={ handleInput }
      />
      <InputDescription
        value={ description }
        setValue={ handleInput }
      />
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default Form;
