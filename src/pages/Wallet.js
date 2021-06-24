// Forma de implementar a tabela e o botão de deletar vista no repositório do Victor Canto
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/76

import React from 'react';
// import PropTypes from 'prop-types';
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
