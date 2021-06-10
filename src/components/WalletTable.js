import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import './WalletTable.css';
import TableHeader from './WalletTable/TableHeader';
import TableLines from './WalletTable/TableLines';

class WalletTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <TableLines key={ expense.id } expense={ expense } />)) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTable.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps, null)(WalletTable);
