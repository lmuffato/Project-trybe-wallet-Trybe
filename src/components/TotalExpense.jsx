import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletRemoveExpense } from '../actions';

class TotalExpense extends Component {
  constructor() {
    super();
    this.deleteExpend = this.deleteExpend.bind(this);
  }

  deleteExpend(currExpend) {
    const { expenses, userRemoveExpense } = this.props;
    const expendsToBeRemoved = expenses.find((expend) => expend.id === currExpend.id);
    const filtredExpend = expenses.filter((expend) => expend.id !== expendsToBeRemoved.id);
    console.log(filtredExpend);
    userRemoveExpense(filtredExpend);
  }

  render() {
    const { expenses } = this.props;
    const allCurrencies = expenses.map((currencie) => currencie.currency);
    if (expenses.length < 1) return <div />;
    return (
      <>
        {expenses.map((expend, index) => (
          <tr key={ expend.id }>
            <td>{expend.description}</td>
            <td>{expend.tag}</td>
            <td>{expend.method}</td>
            <td>{expend.value}</td>
            <td>{expend.exchangeRates[allCurrencies[index]].name.split('/')[0]}</td>
            <td>
              {(parseFloat(expend.value)
              * parseFloat(expend.exchangeRates[allCurrencies[index]].ask)).toFixed(2)}
            </td>
            <td>
              {(parseFloat(expend.exchangeRates[allCurrencies[index]].ask)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button">Edit</button>
              <button
                onClick={ () => this.deleteExpend(expend) }
                data-testid="delete-btn"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const secondMapDispatchToProps = (dispatch) => ({
  userRemoveExpense: (payload) => dispatch(walletRemoveExpense(payload)),
  // userGetApiData: () => dispatch(currencyAPIThunk()),
});

TotalExpense.propTypes = {
  // userGetCurrencie: PropTypes.func.isRequired,
  // userAddCurrencie: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
  // isloading: PropTypes.bool.isRequired,
  userRemoveExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf([]).isRequired,
};

export default connect(mapStateToProps, secondMapDispatchToProps)(TotalExpense);
