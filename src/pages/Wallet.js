import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import './headerCSS.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    let total = 0;
    const { myExpenses } = this.props;
    console.log('aqui my expenses');
    console.log(myExpenses);
    myExpenses.forEach((expense) => {
      const { exchangeRates, value, currency } = expense;
      console.log('exchangeRates');
      console.log(exchangeRates);
      total += parseFloat(exchangeRates[currency].ask) * value;
    });
    return total.toFixed(2);
  }

  render() {
    const { emaildoEstado } = this.props;
    return (
      <div>
        <header className="HeaderClass">
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ emaildoEstado }</div>
          <div data-testid="total-field">
            Despesa total:
            {this.totalValue()}
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emaildoEstado: state.user.email,
  myExpenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
  totalValue: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
