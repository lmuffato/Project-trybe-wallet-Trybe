import React from 'react';
import Header from '../components/Header';
import FormField from '../components/ExpenseForm/FormField';

class Wallet extends React.Component {
  /* constructor() {
    super();
    const { expenses } = props;
  }

  async handleExchangeRates() {
    const { addExpense, getCurrencies } = this.props;
    const getExchangeRates = getCurrencies();
    this.setState({ exchangeRates: getExchangeRates });
    addExpense(this.state);
  } */
  render() {
    return (
      <div>
        <Header />
        <h1>TrybeWallet</h1>
        <FormField />
      </div>
    );
  }
}

export default Wallet;
