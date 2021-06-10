/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { arrayOf, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrency } from '../../actions';
// import { Form, Label, input, Select, Option } from './style';

const renderCurrencyOption = ({ code, name }) => (
  <option
    value={ code }
    key={ code }
    title={ name }
  >
    {code}
  </option>
);

const handleChange = async ({ target: { id, value } }, setExpense, expense) => {
  setExpense({ ...expense, [id]: value });
};

const handleSubmit = (e, props, expense) => {
  const { addNewExpense, expenses, currencies, fetchCurrencies } = props;

  e.preventDefault();
  fetchCurrencies();

  const newExpense = {
    id: expenses.length,
    ...expense,
    exchangeRates: currencies.reduce((acc, actual) => {
      acc[actual.code] = actual;
      return acc;
    }, {}),
  };

  addNewExpense(newExpense);
};

const renderExpenseForm = (expense, setExpense, props) => (
  <form onSubmit={ (e) => handleSubmit(e, props, expense) }>
    <label htmlFor="value">
      Valor:
      <input
        type="text"
        id="value"
        onChange={ (e) => handleChange(e, setExpense, expense) }
      />
    </label>

    <label htmlFor="description">
      Descrição:
      <input
        type="text"
        id="description"
        onChange={ (e) => handleChange(e, setExpense, expense) }
      />
    </label>

    <label htmlFor="currency">
      Moeda:
      <select id="currency" onChange={ (e) => handleChange(e, setExpense, expense) }>
        { props.currencies.map((currency) => renderCurrencyOption(currency))}
      </select>
    </label>

    <label htmlFor="method">
      Método de pagamento:
      <select id="method" onChange={ (e) => handleChange(e, setExpense, expense) }>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>

    <label htmlFor="tag">
      Tag:
      <select id="tag" onChange={ (e) => handleChange(e, setExpense, expense) }>
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>

    <button type="submit">Adicionar despesa</button>
  </form>
);

const AddExpenseForm = (props) => {
  const [expense, setExpense] = useState({});

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    renderExpenseForm(expense, setExpense, props)
  );
};

const mapStateToProps = ({ wallet: { expenses, currencies } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  currencies: arrayOf(object),
  expenses: arrayOf(object),
  fetchCurrencies: func,
  addExpense: func,
}.isRequired;
