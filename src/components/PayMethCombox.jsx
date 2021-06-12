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
          className="input is-success"
          onChange={ handler }
        >
          <option name="payment-method"> Crédito </option>
          <option name="payment-method"> Débito </option>
          <option name="payment-method"> Dinheiro </option>
        </select>
      </label>
    );
  }
}

PayMethCombox.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default PayMethCombox;
