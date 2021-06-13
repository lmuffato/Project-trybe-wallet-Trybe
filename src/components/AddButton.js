import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addExpense as addExpenseAction,
  editExpense as editExpenseAction,
  saveEditExpense as saveEditExpenseAction,
} from '../actions';

import fetchCurrencies from '../services/currenciesApi';

class AddButton extends Component {
  constructor() {
    super();

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.state = { id: 0 };
  }

  async handleAddClick() {
    const {
      expense: { value, description, currency, method, tag },
      addExpense,
    } = this.props;
    const { id } = this.state;

    addExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await fetchCurrencies(),
    });

    this.setState((prevId) => ({ id: prevId.id + 1 }));
  }

  handleEditClick() {
    const {
      expense: { value, description, currency, method, tag },
      expenses,
      editExpense,
      expenseToEdit,
      handleShouldUpdate,
    } = this.props;

    const indexEditedExpense = expenses
      .findIndex((expense) => expense.id === expenseToEdit.id);

    console.log(indexEditedExpense);

    editExpense({
      id: expenseToEdit.id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: expenseToEdit.exchangeRates,
    }, indexEditedExpense);

    handleShouldUpdate();
  }

  render() {
    return (
      <>
        <button
          type="button"
          onClick={ this.handleAddClick }
        >
          Adicionar Despesa
        </button>
        <button
          type="button"
          onClick={ this.handleEditClick }
        >
          Editar Despesa
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (obj) => dispatch(addExpenseAction(obj)),
  saveEditExpense: (expense) => dispatch(saveEditExpenseAction(expense)),
  editExpense: (expense, index) => dispatch(editExpenseAction(expense, index)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  expenseToEdit: state.wallet.expenseToEdit,
});

AddButton.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expense: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    payment: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
  expenseToEdit: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    payment: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.string),
  })).isRequired,
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  handleShouldUpdate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
