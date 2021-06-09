import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import TableWallet from '../components/TableWallet';
import ExpenseTrackerForm from '../components/ExpenseTrackerForm/ExpenseTrackerForm';
// import { addingExpense, getExchangeRatesThunk } from '../actions';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   // const { expenses } = props;
  // }

  // async handleExchangeRates() {
  //   const { addExpense, getCurrencies } = this.props;
  //   const getExchangeRates = getCurrencies();
  //   this.setState({ exchangeRates: getExchangeRates });
  //   addExpense(this.state);
  // }

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
