import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaymentInput extends Component {
  render() {
    const { handleChange, method } = this.props;
    return (
      <label htmlFor="metodo de pagamento">
        Método de pagamento
        <select
          id="metodo de pagamento"
          name="method"
          value={ method }
          onChange={ handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartão de credito">Cartão de crédito</option>
          <option value="cartão de debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default connect()(PaymentInput);
