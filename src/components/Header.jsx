import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import './headerCSS.css';

// Referência para resolver req 5, {referente ao initialValue} a partir do trabalho do Anderson Silva: https://github.com/tryber/sd-010-a-project-trybewallet/pull/75/files
class Header extends React.Component {
  constructor() {
    super();
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    let total = 0;
    const { myExpenses } = this.props;
    myExpenses.forEach((expense) => {
      const { exchangeRates, selectedCoin, value } = expense;
      total += exchangeRates[selectedCoin].ask * value;
    });
    return total.toFixed(2);
  }

  render() {
    const { emaildoEstado } = this.props;
    return (
      <div className="HeaderClass">
        <div data-testid="email-field">{ emaildoEstado }</div>
        <div data-testid="total-field">
          Despesa total:
          {this.totalValue()}
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emaildoEstado: state.user.email,
  // totalValue: state.wallet.totalValue,
  myExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string,
  totalValue: PropTypes.number,
}.isRequired;
