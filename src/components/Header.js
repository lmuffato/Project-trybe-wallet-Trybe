import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail /* expenses */ } = this.props;
    const expenses = [1, 2, 3]; //teste

    return (
      <div>
        <p data-testid="email-field">{`E-mail: ${userEmail}`}</p>
        <p data-testid="total-field">{ expenses.reduce((acc, value) => acc + value) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  // expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
