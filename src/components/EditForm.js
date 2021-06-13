import React, { Component } from 'react';
import { func, objectOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, setNewExpense, updateTotalExpenses,
  changeUpdate } from '../actions/index';
import Tag from './WalletFormOptions/Tag';
import Method from './WalletFormOptions/Method';
import Currency from './WalletFormOptions/Currency';
import Description from './WalletFormOptions/Description';
import Value from './WalletFormOptions/Value';
// import updateExpenses from '../services/updateExpenses';

class EditForm extends Component {
  constructor(props) {
    super(props);

    const { expenses, id } = this.props;
    const editCell = expenses.find((expense) => expense.id === id);
    const { value, description, currency, method, tag } = editCell;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value,
      description,
      currency,
      method,
      tag,
    };
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { currencies, isLoading, cancelEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const currenciesKeys = Object.keys(currencies).filter((key) => key !== 'USDT');
    return (
      <form onSubmit={ this.handleSubmit }>
        <Value value={ value } handleInput={ this.handleInput } />
        <Description description={ description } handleInput={ this.handleInput } />
        <Currency
          currencies={ currenciesKeys }
          selectedCur={ currency }
          handleInput={ this.handleInput }
        />
        <Method method={ method } handleInput={ this.handleInput } />
        <Tag tag={ tag } handleInput={ this.handleInput } />
        <button
          type="submit"
          disabled={ isLoading }
        >
          Adicionar Despesa
        </button>
        <button
          type="button"
          onClick={ () => cancelEdit({ id: null, editing: false }) }
        >
          Cancelar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesThunk()),
  setExpense: (data) => dispatch(setNewExpense(data)),
  dispatchUpdatedExpenses: (value) => dispatch(updateTotalExpenses(value)),
  cancelEdit: (payload) => dispatch(changeUpdate(payload)),
});

EditForm.propTypes = {
  setCurrencies: func,
  currencies: objectOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
