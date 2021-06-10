import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { walletAddCurrencie, walletAddExpense } from '../actions';
import ExpendForm from '../components/ExpendForm';
import { currencyAPIThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.getValues = this.getValues.bind(this);
  }

  componentDidMount() {
    const { userAddCurrencie } = this.props;
    userAddCurrencie();
  }

  getValues() {
    const { expenses } = this.props;
    const allCurrencies = expenses.map((currencie) => currencie.currency);
    const totalValue = expenses
      .reduce((acc, currItem, index) => acc + parseFloat(currItem.value)
      * parseFloat(currItem.exchangeRates[allCurrencies[index]].ask), 0);
    return totalValue.toFixed(2);
  }

  render() {
    const { email } = this.props;
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
  userAddCurrencie: () => dispatch(currencyAPIThunk()),
});

const secondMapStateToProps = ({ wallet: { isloading, expenses },
  user: { email } }) => ({
  isloading,
  email,
  expenses,
});

Wallet.propTypes = {
  userAddCurrencie: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf([{}]).isRequired,
};

export default connect(secondMapStateToProps, secondMapDispatchToProps)(Wallet);
