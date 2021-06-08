import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';

import elements from '../services/inputs';
import { fetchCurrency } from '../actions';

const FormWallet = () => {
  const { inputs, selects, options } = elements;

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const { wallet } = globalState;

  const updatedOptions = [wallet.currencies, ...options];

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  return (
    <form>
      {inputs.map((input) => (
        <LabelInput key={ input.id } input={ input } />
      ))}

      {selects.map((select, index) => (
        <LabelSelect
          key={ select.id }
          select={ select }
          options={ updatedOptions[index] }
        />
      ))}
    </form>
  );
};

export default FormWallet;
