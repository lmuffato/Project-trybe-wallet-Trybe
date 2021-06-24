import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { valor } = this.props;
    if (valor.length < 1) {
      return 0;
    }
    let total = 0;
    valor.forEach((element) => {
      let number = parseFloat(element.value);
      const values = Object.values(element.exchangeRates);
      const moeda = values.find((coin) => coin.code === element.currency);
      number *= moeda.ask;
      total += number;
    });
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { this.totalValue() }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valor: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  valor: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
