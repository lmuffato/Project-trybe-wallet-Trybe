import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseButton from './ExpenseButton';
import InputCategory from './InputCategory';
import InputCurrency from './InputCurrency';
import InputDescription from './inputDescription';
import InputPayment from './inputPayment';
import InputValue from './InputValue';
import { getExpensesThunk } from '../actions/wallet';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.dispatchExpenses = this.dispatchExpenses.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  dispatchExpenses(e) {
    e.preventDefault();
    const { expenses, getCurrency } = this.props;
    const id = expenses.length;
    getCurrency({ ...this.state, id });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    return (
      <section className="form-container">
        <InputValue
          value={ value }
          onChange={ this.handleChange }
        />
        <InputDescription
          value={ description }
          onChange={ this.handleChange }
        />
        <InputCurrency
          value={ currency }
          onChange={ this.handleChange }
        />
        <InputPayment
          value={ method }
          onChange={ this.handleChange }
        />
        <InputCategory
          value={ tag }
          onChange={ this.handleChange }
        />
        <ExpenseButton
          onClick={ this.dispatchExpenses }
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: (value) => dispatch(getExpensesThunk(value)),
});

Form.propTypes = {
  getCurrencies: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
