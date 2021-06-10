import React from 'react';
import PropTypes from 'prop-types';

class Payment extends React.Component {
  render() {
    const { payment, handlePayment } = this.props;
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          value={ payment }
          onChange={ handlePayment }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Payment.propTypes = {
  payment: PropTypes.string,
}.isRequired;

export default Payment;
