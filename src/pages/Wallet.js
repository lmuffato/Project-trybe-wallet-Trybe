import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Form from '../components/form';
import Table from '../components/table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
        <Table />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
