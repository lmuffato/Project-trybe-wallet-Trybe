import React from 'react';
import InputCategory from './InputCategory';
import InputCurrency from './InputCurrency';
import InputDescription from './inputDescription';
import InputPayment from './inputPayment';
import InputValue from './InputValue';

class Form extends React.Component {
  render() {
    return (
      <section>
        <InputValue />
        <InputDescription />
        <InputCurrency />
        <InputPayment />
        <InputCategory />
      </section>
    );
  }
}

export default Form;
