import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { email, totalPrice } = this.props;
    return (
      <div>
        Trybe Wallet
        <div>
          <span>Email: </span>
          <span data-testid="email-field">{ email }</span>
          <span>Despesa Total: </span>
          <span data-testid="total-field">{ totalPrice || '0' }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  email: state.user.email,
  totalPrice: state.wallet.totalPrice,
});

WalletHeader.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStatetoProps)(WalletHeader);
