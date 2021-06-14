import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ExpensesList from './components/ExpensesList';

class Wallet extends React.Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);

    this.state = {
      totalExpenses: 0,
    };
  }

  updateState(value) {
    const { totalExpenses } = this.state;
    const total = totalExpenses + value;
    this.setState({
      totalExpenses: total,
    });
  }

  render() {
    const { totalExpenses } = this.state;
    return (
      <div>
        <Header totalExpenses={ totalExpenses } />
        <Form updateExpenses={ this.updateState } />
        <ExpensesList />
      </div>
    );
  }
}

export default Wallet;
