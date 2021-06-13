import React, { Component } from 'react';
import { func, objectOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { updateTotalExpenses, changeUpdate, updateExpense } from '../actions/index';
import Tag from './WalletFormOptions/Tag';
import Method from './WalletFormOptions/Method';
import Currency from './WalletFormOptions/Currency';
import Description from './WalletFormOptions/Description';
import Value from './WalletFormOptions/Value';
import updateExpenses from '../services/updateExpenses';

class EditForm extends Component {
  constructor(props) {
    super(props);

    const { expenses, id } = this.props;
    const editCell = expenses.find((expense) => expense.id === id);
    const { value, description, currency, method, tag } = editCell;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.replaceEditedExpense = this.replaceEditedExpense.bind(this);

    this.state = {
      value,
      description,
      currency,
      method,
      tag,
    };
  }

  replaceEditedExpense() {
    const { id, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const formatValue = value.replace(',', '.');
    const expenseToBeEdited = expenses.find((expense) => expense.id === id);
    const editedExpense = {
      ...expenseToBeEdited,
      value: formatValue,
      description,
      currency,
      method,
      tag,
    };
    return expenses.map((expense) => {
      if (expense.id === editedExpense.id) return editedExpense;
      return expense;
    });
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { dispatchUpdatedList, dispatchUpdatedTotal, returnFromEdit } = this.props;
    const newList = this.replaceEditedExpense();
    dispatchUpdatedList(newList);
    dispatchUpdatedTotal(updateExpenses(newList));
    returnFromEdit({ id: null, editing: false });
  }

  render() {
    const { currencies, returnFromEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Value value={ value } handleInput={ this.handleInput } />
        <Description description={ description } handleInput={ this.handleInput } />
        <Currency
          currencies={ currencies }
          selectedCur={ currency }
          handleInput={ this.handleInput }
        />
        <Method method={ method } handleInput={ this.handleInput } />
        <Tag tag={ tag } handleInput={ this.handleInput } />
        <button
          type="submit"
        >
          Editar despesa
        </button>
        <button
          type="button"
          onClick={ () => returnFromEdit({ id: null, editing: false }) }
        >
          Cancelar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdatedTotal: (value) => dispatch(updateTotalExpenses(value)),
  dispatchUpdatedList: (value) => dispatch(updateExpense(value)),
  returnFromEdit: (payload) => dispatch(changeUpdate(payload)),
});

EditForm.propTypes = {
  setCurrencies: func,
  currencies: objectOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
