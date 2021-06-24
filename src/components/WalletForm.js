import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import WalletInput from './WalletInput';
import walletThunks from '../thunks/wallet';
import {
  editExpense as editExpenseAction,
  updateExpenses as updateExpensesAction,
  defineEditing as defineEditingAction,
} from '../actions';
import ButtonAdd from './ButtonAdd';
import ButtonEdit from './ButtonEdit';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const selectString = 'Selecione...';
const initialState = {
  id: 0,
  value: '',
  currency: selectString,
  method: selectString,
  tag: selectString,
  description: '',
  exchangeRates: {},
};

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      expense: {
        id: 0,
        value: '',
        currency: selectString,
        method: selectString,
        tag: selectString,
        description: '',
        exchangeRates: {},
      },
      // isLoggedIn: true,
    };
    this.walletForm = React.createRef();
  }

  componentDidMount() {
    const { getExchangeRates, editing } = this.props;
    // this.checkLogged();
    if (!editing) {
      getExchangeRates();
    }
  }

  addExpense = async (e) => {
    e.preventDefault();
    const { addNewExpenseThunk } = this.props;

    await addNewExpenseThunk(this.newExpense);
    this.setState((prev) => ({
      expense: { ...initialState, id: prev.expense.id + 1 },
    }));
    // this.resetForm();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { editing, editExpense } = this.props;

    if (editing) {
      editExpense({ [name]: value });
    } else {
      this.setState(({ expense }) => ({
        expense: {
          ...expense,
          [name]: value,
        },
      }));
    }
  };

  saveExpenseEdited = (e) => {
    e.preventDefault();
    const { updateExpenses, wallet: { expenses }, expense, defineEditing } = this.props;
    const expenseIndex = expenses.indexOf(expenses.find(({ id }) => id === expense.id));
    Object.keys(expense).forEach((key) => {
      if (initialState[key] === undefined) {
        delete expense[key];
      }
    });
    expenses[expenseIndex] = expense;
    updateExpenses(expenses);
    defineEditing(false);
    this.walletForm.current.classList.remove('editing');
  };

  newExpense = () => {
    const { wallet } = this.props;
    const { expense } = this.state;
    if (!this.checkEmptyInput(expense)) {
      return {
        ...expense,
        exchangeRates: wallet.exchangeRates,
      };
    }
    alert('Preencha todos os campos.');
  };

  checkEmptyInput = (inputs) => !!Object.values(inputs)
    .filter((value) => value === '').length;

  // checkLogged = () => {
  //   const { user } = store.getState();
  //   if (user.email === '') {
  //     // alert('Usuário não logado!');
  //     this.setState({ isLoggedIn: false });
  //   }
  // };

  renderSelects = () => {
    const {
      wallet: { currencies },
      editing,
      expense: expenseToEdit,
    } = this.props;
    const { expense } = this.state;
    return (
      <>
        <Select
          options={ currencies }
          title="code"
          id="currency"
          htmlFor="currency"
          label="Moeda"
          name="currency"
          handleChange={ this.handleChange }
          value={ editing ? expenseToEdit.currency : expense.currency }
          dataTestId="currency-input"
        />
        <Select
          options={ paymentMethods }
          id="method"
          htmlFor="method"
          label="Método de pagamento"
          handleChange={ this.handleChange }
          value={ editing ? expenseToEdit.method : expense.method }
          dataTestId="method-input"
        />
        <Select
          options={ categories }
          id="tag"
          htmlFor="tag"
          label="Tag"
          handleChange={ this.handleChange }
          value={ editing ? expenseToEdit.tag : expense.tag }
          dataTestId="tag-input"
        />
      </>
    );
  };

  render() {
    const { expense } = this.state;
    const { editing, expense: expenseToEdit } = this.props;

    if (editing) {
      this.walletForm.current.classList.add('editing');
    }

    return (
      <form className="wallet-form" id="wallet-form" ref={ this.walletForm }>
        <WalletInput
          htmlFor="value"
          label="Valor"
          type="number"
          dataTestId="value-input"
          id="value"
          value={ editing ? expenseToEdit.value : expense.value }
          handleChange={ this.handleChange }
        />
        {this.renderSelects()}
        <WalletInput
          label="Descrição"
          htmlFor="description"
          type="text"
          dataTestId="description-input"
          id="description"
          value={ editing ? expenseToEdit.description : expense.description }
          handleChange={ this.handleChange }
        />
        {editing ? (
          <ButtonEdit editExpense={ this.saveExpenseEdited } />
        ) : (
          <ButtonAdd addExpense={ this.addExpense } />
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  editing: state.wallet.editing,
  expense: state.wallet.expense,
});
const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(walletThunks.getExchangeRates()),
  addNewExpenseThunk: (getExpense) => dispatch(walletThunks.addNewExpense(getExpense)),
  updateExpenses: (expenses) => dispatch(updateExpensesAction(expenses)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
  defineEditing: (bool) => dispatch(defineEditingAction(bool)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  paymentMethods: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
