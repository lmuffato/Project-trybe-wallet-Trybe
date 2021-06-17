import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AddForm from '../components/addform';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <AddForm />
        <TableExpenses />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
