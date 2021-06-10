import React from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    let total = 0;
    if (expenses.length === 0) return total;
    expenses.map(({ value }) => {
      total += value;
      return total;
    });
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            Email:
            {email}
          </span>
          <span data-testid="total-field">
            Dispesa Total: R$
            {this.totalValue()}
            <span data-testid="header-currency-field">
              BRL
            </span>
          </span>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: string,
  total: number,
  cambio: string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
