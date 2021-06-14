import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import WalletInput from './WalletInput';

export default class WalletForm extends Component {
  renderSelects = () => {
    const {
      currencies,
      paymentMethods,
      categories,
      handleChange,
      selectValue,
    } = this.props;
    return (
      <>
        <Select
          options={ currencies }
          title="code"
          id="currency"
          htmlFor="currency"
          label="Moeda"
          name="moeda"
          handleChange={ handleChange }
          value={ selectValue }
        />
        <Select
          options={ paymentMethods }
          id="method"
          htmlFor="method"
          label="Método de pagamento"
          handleChange={ handleChange }
          value={ selectValue }
        />
        <Select
          options={ categories }
          id="tag"
          htmlFor="tag"
          label="Tag"
          handleChange={ handleChange }
          value={ selectValue }
        />
      </>
    );
  };

  render() {
    const { handleChange } = this.props;
    return (
      <>
        <WalletInput
          htmlFor="value"
          label="Valor"
          type="number"
          id="value"
          handleChange={ handleChange }
        />
        {this.renderSelects()}
        <WalletInput
          label="Descrição"
          htmlFor="description"
          type="text"
          id="description"
          handleChange={ handleChange }
        />
      </>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  paymentMethods: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
