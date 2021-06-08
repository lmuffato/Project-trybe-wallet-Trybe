import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">Despesas Totais: 0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

WalletHeader.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps)(WalletHeader);
