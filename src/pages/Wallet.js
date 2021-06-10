import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { walletAddCurrencie, walletAddExpense } from '../actions';
import ExpendForm from '../components/ExpendForm';
import { currencyAPIThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   expensesLenght: 0,
    // };
    this.getValues = this.getValues.bind(this);
  }

  componentDidMount() {
    const { userAddCurrencie } = this.props;
    userAddCurrencie();
  }

  getValues() {
    const { expenses } = this.props;
    // const { expensesLenght } = this.state;
    const allCurrencies = expenses.map((currencie) => currencie.currency);
    const totalValue = expenses
      .reduce((acc, currItem, index) => acc + parseFloat(currItem.value)
      * parseFloat(currItem.exchangeRates[allCurrencies[index]].ask), 0);
    // this.setState((previousState) => ({
    //   expensesLenght: previousState.expensesLenght + 1,
    // }));
    return totalValue.toFixed(2);
  }

  render() {
    // const { userAddExpense, userAddCurrencie } = this.props;
    const { email } = this.props;
    // const { expenses } = this.props;
    // if (expenses.legth < 1) return <h1>Loading....</h1>;
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{this.getValues()}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <ExpendForm />
      </>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  // userAddExpense: () => dispatch(walletAddExpense()),
  userAddCurrencie: () => dispatch(currencyAPIThunk()),
});

const secondMapStateToProps = ({ wallet: { isloading, expenses },
  user: { email } }) => ({
  isloading,
  email,
  expenses,
});

Wallet.propTypes = {
  // userAddExpense: PropTypes.func.isRequired,
  userAddCurrencie: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf([{}]).isRequired,
};

export default connect(secondMapStateToProps, secondMapDispatchToProps)(Wallet);
