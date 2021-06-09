import React, { Component } from 'react';
import { payments } from '../services/data';

class InputPayment extends Component {
  render() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select name="pagamento" id="pagamento">
          {payments.map((payment) => (
            <option key={ payment } value={ payment }>{ payment }</option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputPayment;
