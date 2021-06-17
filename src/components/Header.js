import React from 'react';
import { connect } from 'react-redux';
import { string, shape } from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
    };
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    /*     this.setState({
      sum,
    }); */
    return sum;
  }

  render() {
    const { userMail } = this.props;
    // const totalValue = expenses.reduce((acc, curr) => {
    //   const { currency } = curr;
    //   return acc + (Number(curr.value) * curr.exchangeRates[currency].ask);
    // }, 0); // retorna o acumulador, transformando em numero, iniciando o id em 0.

    return (
      <div>
        <header>
          <h1 data-testid="email-field">
            { userMail }
          </h1>
          <h3 data-testid="total-field">{ this.totalValue() }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // recebe o estado como props
  userMail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userMail: string.isRequired,
  expenses: shape.isRequired,
};

export default connect(mapStateToProps, null)(Header);
