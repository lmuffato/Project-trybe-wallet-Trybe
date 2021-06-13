import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { connect } from 'react-redux';
import { walletEditExpense, walletRemoveExpense } from '../actions';
import './table.css';

class TotalExpense extends Component {
  constructor() {
    super();
    this.deleteExpend = this.deleteExpend.bind(this);
    this.editExpend = this.editExpend.bind(this);
    this.checkisEditing = this.checkisEditing.bind(this);
    this.secondCheckisEditing = this.secondCheckisEditing.bind(this);
  }

  deleteExpend(currExpend) {
    const { expenses, userRemoveExpense } = this.props;
    const expendsToBeRemoved = expenses.find((expend) => expend.id === currExpend.id);
    const filtredExpend = expenses
      .filter((expend) => expend.id !== expendsToBeRemoved.id);
    userRemoveExpense(filtredExpend);
  }

  secondCheckisEditing(editObj) {
    const { isEditing } = this.props;
    if (isEditing) return true;
    this.deleteExpend(editObj);
  }

  checkisEditing(editObj) {
    const { isEditing } = this.props;
    if (isEditing) return true;
    this.editExpend(editObj);
  }

  editExpend(editObj) {
    // this.deleteExpend(editObj);
    const { userEditExpense } = this.props;
    userEditExpense(editObj);
  }

  render() {
    const { expenses } = this.props;
    const allCurrencies = expenses.map((currencie) => currencie.currency);
    return (
      <tbody>
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
              <BsPencilSquare
                onClick={ () => this.checkisEditing(expend) }
                type="button"
                data-testid="edit-btn"
                className="add-edit"
              >
                Edit
              </BsPencilSquare>
              <BsFillTrashFill
                onClick={ () => this.secondCheckisEditing(expend) }
                type="button"
                data-testid="delete-btn"
                className="add-edit"
              >
                Delete
              </BsFillTrashFill>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses, isEditing } }) => ({
  expenses,
  isEditing,
});

const secondMapDispatchToProps = (dispatch) => ({
  userRemoveExpense: (payload) => dispatch(walletRemoveExpense(payload)),
  userEditExpense: (payload) => dispatch(walletEditExpense(payload)),
});

TotalExpense.propTypes = {
  userRemoveExpense: PropTypes.func,
  expenses: PropTypes.arrayOf([]),
  userEditExpense: PropTypes.func,
  isEditing: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, secondMapDispatchToProps)(TotalExpense);
