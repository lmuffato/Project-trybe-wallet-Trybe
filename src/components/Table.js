import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currencies } from '../actions';

class Table extends Component {
  render() {
    return (
      <table>
        <th>Valor</th>
        <th>Descrição</th>
        <th>Moeda</th>
        <th>Categoria</th>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  toCurrency: (payload) => dispatch(currencies(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
