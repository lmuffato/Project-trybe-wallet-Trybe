import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ValueInput from './WalletForm/ValueInput';
import DescriptionInput from './WalletForm/DescriptionInput';
import CurrencyInput from './WalletForm/CurrencyInput';
import MethodInput from './WalletForm/MethodInput';
import TagInput from './WalletForm/TagInput';
import { getCurrenciesDataThunk, editExpenseThunk } from '../actions';
import '../style/WalletForm.css';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetFormState = this.resetFormState.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  resetFormState() {
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  renderButton(type) {
    const {
      getCurrenciesData,
      editExpense,
      editableExpense,
      expenses } = this.props;

    if (type === 'add') {
      return (
        <button
          type="button"
          onClick={ () => {
            getCurrenciesData(this.state);
            this.resetFormState();
          } }
          className="wallet-form-button-add"
        >
          Adicionar despesa
        </button>
      );
    }
    if (type === 'edit') {
      return (
        <button
          type="button"
          onClick={ () => {
            editExpense(this.state, editableExpense, expenses);
            this.resetFormState();
          } }
          className="wallet-form-button-edit"
        >
          Editar despesa
        </button>
      );
    }
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { formType } = this.props;
    return (
      <form className="wallet-form-container">
        <div className="wallet-form-inputs-container">
          <ValueInput
            handleChange={ this.handleChange }
            value={ value }
          />
          <DescriptionInput
            handleChange={ this.handleChange }
            description={ description }
          />
          <CurrencyInput
            handleChange={ this.handleChange }
            currency={ currency }
          />
          <MethodInput
            handleChange={ this.handleChange }
            method={ method }
          />
          <TagInput
            handleChange={ this.handleChange }
            tag={ tag }
          />
        </div>

        {this.renderButton(formType)}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  formType: state.wallet.formType,
  editableExpense: state.wallet.editableExpense,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesData: (formState) => dispatch(getCurrenciesDataThunk(formState)),
  editExpense: (formState, editableExp, exp) => (
    dispatch(editExpenseThunk(formState, editableExp, exp))
  ),
});

WalletForm.propTypes = {
  getCurrenciesData: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
