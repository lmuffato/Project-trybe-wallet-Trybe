import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  // constructor(_props) {
  //   super(_props);
  // }

  render() {
    const { handleChange, value: method } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          value={ method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PaymentMethod;
