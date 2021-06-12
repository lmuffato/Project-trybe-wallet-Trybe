import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrencies, getCurrenciesObj } from '../service/Api';
import Input from './Input';
import Select from './Select';
import { addExpense } from '../actions';

const template = (currencies, handleSubmit, handle) => {
  const oCurrencies = currencies.map((currency, index) => (
    <option value={ currency.value } key={ index }>
      {currency.code}
    </option>));

  const oMethods = [
    <option key="1000">Dinheiro</option>,
    <option key="1001">Cartão de crédito</option>,
    <option key="1002">Cartão de débito</option>,
  ];

  const oTag = [
    <option key="1011">Alimentação</option>,
    <option key="1012">Lazer</option>,
    <option key="1013">Trabalho</option>,
    <option key="1014">Transporte</option>,
    <option key="1015">Saúde</option>,
  ];

  return (
    <form onSubmit={ (event) => handleSubmit(event) } className="container">
      <Input name="value" display="Valor" handleChange={ handle } />
      <Input name="describeExpense" display="Descrição" handleChange={ handle } />
      <Select name="currency" display="Moeda" options={ oCurrencies } handle={ handle } />
      <Select
        name="method"
        display="Método de pagamento"
        options={ oMethods }
        handle={ handle }
      />
      <Select name="tag" display="Tag" options={ oTag } handle={ handle } />
      <button
        className="btn btn-primary"
        type="submit"
        onClick={ handleSubmit }
      >
        Adicionar despesa
      </button>
    </form>
  );
};

const AddExpense = () => {
  const [currencies, setCurrencies] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const fetchCurrencies = async () => {
    const currenciesData = await getCurrencies();
    setCurrencies(currenciesData);
    return currenciesData;
  };

  useEffect(() => {
    fetchCurrencies().then();
    setValues({ ...values,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }, []);

  const handleChange = (event) => {
    const formValues = { ...values };
    formValues[event.target.name] = event.target.value;
    setValues(formValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const lastExpense = expenses.length !== undefined ? expenses.length - 1 : 0;
    const newExpense = {
      id: lastExpense + 1,
      value: values.value,
      description: values.describeExpense,
      currency: values.currency,
      method: values.method,
      tag: values.tag,
      exchangeRates: await getCurrenciesObj(),
    };
    setExpenses([...expenses, newExpense]);
    dispatch(addExpense(newExpense));
  };

  return template(currencies, handleSubmit, handleChange);
};

export default AddExpense;
