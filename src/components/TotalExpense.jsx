import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TotalExpense extends Component {
  render() {
    const { expenses } = this.props;
    const allCurrencies = expenses.map((currencie) => currencie.currency);
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
              <button type="button">Delete</button>
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

TotalExpense.propTypes = {
  // userGetCurrencie: PropTypes.func.isRequired,
  // userAddCurrencie: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
  // isloading: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf([{}]).isRequired,
};

export default connect(mapStateToProps)(TotalExpense);
