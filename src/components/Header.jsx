import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.expensesValue = this.expensesValue.bind(this);
  }

  expensesValue() {
    const { expenses } = this.props;
    return expenses.reduce((acc, i) => {
      const valorAtual = i.value;
      const valorReais = i.exchangeRates[i.currency].ask;
      const valorConvertido = valorAtual * valorReais;
      return acc + valorConvertido;
    }, 0);
  }

  render() {
    const { getEmailS } = this.props;
    return (
      <div>
        <header>
          <h5 data-testid="email-field">
            {getEmailS}
          </h5>
          <h5 data-testid="total-field">
            Valor:
            { this.expensesValue() }
          </h5>
          <h5 data-testid="header-currency-field">
            Câmbio utilizado: BRL
          </h5>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmailS: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  getEmailS: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Header);
