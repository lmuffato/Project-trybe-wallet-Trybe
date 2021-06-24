import React from 'react';
import ExpenseButton from './ExpenseButton';
import InputCategory from './InputCategory';
import InputCurrency from './InputCurrency';
import InputDescription from './inputDescription';
import InputPayment from './inputPayment';
import InputValue from './InputValue';

class Form extends React.Component {
  render() {
    return (
      <section className="form-container">
        <InputValue />
        <InputDescription />
        <InputCurrency />
        <InputPayment />
        <InputCategory />
        <ExpenseButton />
      </section>
    );
  }
}

export default Form;
