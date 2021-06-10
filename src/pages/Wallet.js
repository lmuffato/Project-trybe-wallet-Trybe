import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import TableWallet from '../components/TableWallet/index';
import ExpenseTrackerForm from '../components/ExpenseTrackerForm/ExpenseTrackerForm';
// import { addingExpense, getExchangeRatesThunk } from '../actions';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseTrackerForm />
        <TableWallet />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addExpense: (state) => dispatch(addingExpense(state)),
//   getCurrencies: () => dispatch(getExchangeRatesThunk()),
// });

// Wallet.propTypes = {
//   addExpense: PropTypes.func.isRequired,
//   // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
//   getCurrencies: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
export default Wallet;
