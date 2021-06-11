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
      <div className="expenses-container">
        <table className="expenses-table">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            { expenses.map((expense) => (
              <TableLines key={ expense.id } expense={ expense } />)) }
          </tbody>
        </table>
      </div>
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
