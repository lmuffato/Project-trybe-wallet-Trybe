import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyForm from './MyForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.sumExpenses = this.sumExpenses.bind(this);

    const { email } = this.props;

    this.state = {
      userEmail: email,
      cambio: 'BRL',
    };
  }

  sumExpenses() {
    const { expense } = this.props;
    console.log(expense);
    const reduce = expense.reduce(
      (acc, curr) => acc + (curr.value * curr.exchangeRates[curr.currency].ask), 0,
    );
    return reduce.toFixed(2);
  }

  render() {
    const { userEmail, cambio } = this.state;
    return (
      <body>
        <header>
          <p data-testid="email-field">
            Usuário:
            {' '}
            {userEmail}
          </p>
          <p data-testid="total-field">
            Despesar Totais: R$
            {' '}
            {this.sumExpenses()}
          </p>
          <p data-testid="header-currency-field">{cambio}</p>
        </header>
        <MyForm />
      </body>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
  expense: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToPros, null)(Wallet);
