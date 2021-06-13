import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import WalletInput from './WalletInput';

export default class WalletForm extends Component {
  render() {
    const { currencies, paymentMethods, categories } = this.props;
    return (
      <form className="wallet-inputs">
        <WalletInput
          htmlFor="value-input"
          label="Valor"
          type="number"
          id="value-input"
        />
        <Select
          options={ currencies }
          title="code"
          id="coin-input"
          htmlFor="coin-input"
          label="Moeda"
          name="moeda"
        />
        <Select
          options={ paymentMethods }
          id="payment-method-input"
          htmlFor="payment-method-input"
          label="Método de pagamento"
        />
        <Select
          options={ categories }
          id="tag-input"
          htmlFor="tag-input"
          label="Tag"
        />
        <WalletInput
          label="Descrição"
          htmlFor="description-input"
          type="text"
          id="description-input"
        />
        <button type="button" className="btn btn-primary expense-add-button">
          Adicionar
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  paymentMethods: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
