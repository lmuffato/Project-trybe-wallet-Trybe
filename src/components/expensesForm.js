import React, { Component } from 'react';
import ValueInput from './formComponents/valueInput';
import DescriptionInput from './formComponents/descriptionInput';
import CurrencyInput from './formComponents/currenciesInput';
import PaymentInput from './formComponents/paymentInput';
import CategoryInput from './formComponents/categoryInput';

class expensesForm extends Component {
  render() {
    return (
      <div>
        <form>
          <ValueInput />
          <DescriptionInput />
          <CurrencyInput />
          <PaymentInput />
          <CategoryInput />
        </form>
      </div>
    );
  }
}

export default expensesForm;
