import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpendForm from '../components/ExpendForm';
import { currencyAPIThunk } from '../actions';
import './wallet.css';
import logo from './walletlogo.png';
import EditForm from '../components/EditForm';
import Table from '../components/Table';

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
    const { email, isEditing } = this.props;
    return (
      <>
        <header className="header">
          <h2 className="header-title">My Wallet</h2>
          <img className="logo2" src={ logo } alt="wallet" />
          <p className="header-text" data-testid="email-field">
            {`Email: ${email}`}
          </p>
          <div className="value-currencie">
            <p className="header-text" data-testid="total-field">
              {`R$ ${this.getValues()}`}
            </p>
            <p className="header-text" data-testid="header-currency-field" value="BRL">
              BRL
            </p>
          </div>
        </header>
        { isEditing ? <EditForm /> : <ExpendForm />}
        <Table />
      </>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  userAddCurrencie: () => dispatch(currencyAPIThunk()),
});

const secondMapStateToProps = ({ wallet: { isloading, expenses, isEditing },
  user: { email } }) => ({
  isloading,
  email,
  expenses,
  isEditing,
});

Wallet.propTypes = {
  userAddCurrencie: PropTypes.func,
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
  isEditing: PropTypes.bool,
}.isRequired;

export default connect(secondMapStateToProps, secondMapDispatchToProps)(Wallet);
