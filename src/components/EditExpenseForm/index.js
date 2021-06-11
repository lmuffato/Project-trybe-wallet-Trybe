/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { arrayOf, func, object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { editedExpense, getCurrenciesCode } from '../../actions';
import ExpenseForm from '../ExpenseForm';

const handleSubmit = (e, expense, dispatch) => {
  e.preventDefault();
  dispatch(editedExpense(expense));
};

const EditExpenseForm = () => {
  const { currencies, expenses, editID } = useSelector(({ wallet }) => wallet);
  const dispatch = useDispatch();

  const [expense, setExpense] = useState(expenses.find(({ id }) => id === editID));

  const methods = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  useEffect(() => {
    dispatch(getCurrenciesCode());
  }, []);

  return (
    <ExpenseForm
      expense={ expense }
      setExpense={ setExpense }
      currencies={ currencies }
      methods={ methods }
      tags={ tags }
      onSubmit={ (e) => handleSubmit(e, expense, dispatch) }
      button="Editar despesa"
    />
  );
};

// const mapStateToProps = ({ wallet }) => ({
//   currencies: wallet.currencies,
//   expenses: wallet.expenses,
//   editID: wallet.editID,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchCurrencies: () => dispatch(fetchCurrency()),
//   editExpense: (expense) => dispatch(editedExpense(expense)),
// });

export default EditExpenseForm;

EditExpenseForm.propTypes = {
  currencies: arrayOf(object),
  expenses: arrayOf(object),
  fetchCurrencies: func,
  addExpense: func,
}.isRequired;
