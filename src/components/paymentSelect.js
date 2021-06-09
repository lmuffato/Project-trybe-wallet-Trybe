import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class paymentSelect extends Component {
  render() {
    const { change } = this.props;
    return (
      <label htmlFor="idPayment">
        Método de pagamento
        <select id="idPayment" name="method" onChange={ change }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

paymentSelect.propTypes = {
  change: PropTypes.func.isRequired,
};
