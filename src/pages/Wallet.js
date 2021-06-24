import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.renderTotalExpenses = this.renderTotalExpenses.bind(this);
  }

  renderTotalExpenses() {
    const { expenses } = this.props;
    let sumExpenses = 0;
    expenses.forEach((expense) => {
      const { value, exchangeRates, currency: key } = expense;
      sumExpenses += (value * exchangeRates[key].ask);
    });

    return (Math.round(sumExpenses * 100) / 100);
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <div>TrybeWallet</div>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="total-field">{ this.renderTotalExpenses() }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <Form />
      </section>
    );
  }
}

Wallet.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);

// Referências:
// Alteração da lógica de somar o total das despesas com uma action para um método na página de renderização
//    para atender os testes do avaliador. Solução sugerida pelo Flávio Franco na thread aberta no slack,
//    da turma 10-triboA, pelo Lucas Muffato
