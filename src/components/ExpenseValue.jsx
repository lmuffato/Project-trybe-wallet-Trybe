import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesValues } from '../actions/index';

class ExpenseValue extends Component {
  render() {
    const { inputExpensesValues, expenseValue } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            step="0.1"
            value={ expenseValue === 0 ? '' : expenseValue }
            onChange={ (event) => { inputExpensesValues(event.target.value * 1); } }
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseValue: state.wallet.value,
});

const mapDispatchToProps = (dispatch) => ({
  inputExpensesValues: (value) => dispatch(expensesValues(value)),
});

ExpenseValue.propTypes = {
  inputExpensesValues: PropTypes.func.isRequired,
  expenseValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseValue);
