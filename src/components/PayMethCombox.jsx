import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PayMethCombox extends Component {
  render() {
    const { handler } = this.props;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          name="payment-method"
          id="payment-method"
          className="input is-success"
          onChange={ handler }
        >
          <option name="creditOption"> Cartão de Crédito </option>
          <option name="debitOption"> Cartão de Débito </option>
          <option name="moneyOption"> Dinheiro </option>
        </select>
      </label>
    );
  }
}

PayMethCombox.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default PayMethCombox;
