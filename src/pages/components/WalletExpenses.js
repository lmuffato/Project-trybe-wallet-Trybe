import React, { Component } from 'react';

export default class WalletExpenses extends Component {
  constructor() {
    super();
    this.state = {
      expensesInitialValue: 0,
    };
  }

  render() {
    const { expensesInitialValue } = this.state;
    return (
      <div>
        <p data-testid="total-field">
          {`Despesa total: ${expensesInitialValue}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
