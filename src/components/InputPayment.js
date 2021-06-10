import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { payments } from '../services/data';

class InputPayment extends Component {
  render() {
    const { propValue, onChange } = this.props;
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select
          id="pagamento"
          name="method"
          value={ propValue }
          onChange={ onChange }
        >
          <option value="">Selecione o pagamento</option>
          {payments.map((payment) => (
            <option key={ payment } value={ payment }>{ payment }</option>
          ))}
        </select>
      </label>
    );
  }
}

InputPayment.propTypes = {
  propValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputPayment;
