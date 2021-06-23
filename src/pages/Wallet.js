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
    const { totalExpenses } = this.props;
    let total = 0;
    if (totalExpenses !== 0 && totalExpenses !== undefined) {
      total = (Math.round(totalExpenses * 100) / 100);
    }
    return total;
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
  totalExpenses: state.wallet.totalExpenses,
});

export default connect(mapStateToProps, null)(Wallet);
