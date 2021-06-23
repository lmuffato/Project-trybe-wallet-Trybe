import React, { Component } from 'react';
import EditButton from './editExpenses/EditButton';
import EditCurrency from './editExpenses/EditCurrency';
import EditDescription from './editExpenses/EditDescription';
import EditExChangeRate from './editExpenses/EditExChangeRate';
import EditTag from './editExpenses/EditTag';
import EditValue from './editExpenses/EditValue';

class AllInputsToEditExpense extends Component {
  render() {
    return (
      <div>
        <EditButton />
        <EditCurrency />
        <EditDescription />
        <EditExChangeRate />
        <EditTag />
        <EditValue />
      </div>
    );
  }
}

export default AllInputsToEditExpense;