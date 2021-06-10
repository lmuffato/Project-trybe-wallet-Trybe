import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LabelSelect from './Select';
import elements from '../func/inputs';
import Label from './Label';
import defaultExpenses from '../func/initialExpense';
import { fetchExpensesThunk, fetchCurrencyThunk } from '../actions';

const Form = () => {
  const [expense, setExpense] = React.useState(defaultExpenses);
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const { inputs, selects, options } = elements;
  const currencies = [wallet.currencies, ...options];

  const getExpense = ({ target: { name, value } }) => {
    const newExpense = {
      ...expense,
      id: wallet.expenses.length,
      [name]: value,
    };
    setExpense(newExpense);
  };
  React.useEffect(() => {
    dispatch(fetchCurrencyThunk());
  }, []);
  return (
    <form>
      {inputs.map((input) => (
        <Label key={ input.control } input={ input } getExpense={ getExpense } />
      ))}
      {selects.map((select, index) => (
        <LabelSelect
          key={ select.control }
          select={ select }
          options={ currencies[index] }
          getExpense={ getExpense }
        />
      ))}
      <button type="button" onClick={ () => dispatch(fetchExpensesThunk(expense)) }>
        Adicionar despesa
      </button>
    </form>
  );
};
export default Form;
