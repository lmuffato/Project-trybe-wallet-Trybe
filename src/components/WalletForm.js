import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueInput from './WalletForm/ValueInput';
import DescriptionInput from './WalletForm/DescriptionInput';
import CurrencyInput from './WalletForm/CurrencyInput';
import MethodInput from './WalletForm/MethodInput';
import TagInput from './WalletForm/TagInput';
import { getCurrenciesDataThunk } from '../actions';

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
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { getCurrenciesData } = this.props;

    return (
      <form>
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
        <button
          type="button"
          onClick={ () => getCurrenciesData() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesData: () => dispatch(getCurrenciesDataThunk()),
});

export default connect(null, mapDispatchToProps)(WalletForm);
