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

const handleChange = ({ target: { id, value } }, setExpense, expense) => {
  setExpense({ ...expense, [id]: value });
};

const handleSubmit = (e, expense, addNewExpense, expenses) => {
  e.preventDefault();
  const newExpense = {
    id: expenses.length,
    ...expense,
  };

  addNewExpense(newExpense);
};

const renderExpenseForm = (currencies, setExpense, expense, addNewExpense, expenses) => (
  <form onSubmit={ (e) => handleSubmit(e, expense, addNewExpense, expenses) }>
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
        { currencies.map((currency) => renderCurrencyOption(currency))}
      </select>
    </label>

    <label htmlFor="payment">
      Método de pagamento:
      <select id="payment" onChange={ (e) => handleChange(e, setExpense, expense) }>
        <option value="cash">Dinheiro</option>
        <option value="credit">Cartão de crédito</option>
        <option value="debit">Cartão de débito</option>
      </select>
    </label>

    <label htmlFor="category">
      Tag:
      <select id="category" onChange={ (e) => handleChange(e, setExpense, expense) }>
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

const AddExpenseForm = ({ fetchCurrencies, currencies, addNewExpense, expenses }) => {
  const [expense, setExpense] = useState({});

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    renderExpenseForm(currencies, setExpense, expense, addNewExpense, expenses)
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
