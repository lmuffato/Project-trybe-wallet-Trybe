import React, { Component } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}
