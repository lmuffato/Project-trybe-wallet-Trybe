import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const pay = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];
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
          {pay.map((value) => <option key={ value } value={ value }>{value}</option>)}
        </select>
      </label>
    );
  }
}

PaymentInput.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,

}.isRequired;
export default connect()(PaymentInput);
