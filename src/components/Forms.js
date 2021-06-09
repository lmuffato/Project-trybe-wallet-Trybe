import React, { Component } from 'react';
import InputValue from './InputValue';
import InputDescription from './InputDescription';
import InputCurrencies from './InputCurrencies';
import InputPayment from './InputPayment';
import InputCategory from './InputCategory';

class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <InputValue />
          <InputDescription />
          <InputCurrencies />
          <InputPayment />
          <InputCategory />
        </form>
      </div>
    );
  }
}

export default Forms;
