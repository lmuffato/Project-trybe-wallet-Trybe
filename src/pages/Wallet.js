import React from 'react';
import { connect } from 'react-redux';
import { HeaderWallet, FormExpense } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FormExpense />
      </div>
    );
  }
}

export default connect(null, null)(Wallet);
