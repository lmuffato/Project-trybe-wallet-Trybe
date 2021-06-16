import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, fetchExchangeRate, sumValues } from '../actions';

import ValueInput from './ValueInput';
import PayMethCombox from './PayMethCombox';
import TagOptions from './TagOptions';
import DescriptionInput from './DescriptionInput';

class AddCurrencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: '',
      description: '',
      exchangeRates: '',
    };
    this.renderOptions = this.renderOptions.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleCurrencie = this.handleCurrencie.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.getExpenseData = this.getExpenseData.bind(this);
  }

  async getExpenseData() {
    const { id } = this.state;
    const {
      addExpenseAction, fetchExchangeRateThunk, sumExpenseValues, expenses } = this.props;
    await addExpenseAction(this.state);
    await fetchExchangeRateThunk(id);
    await sumExpenseValues([
      ...expenses,
      this.state,
    ]);
    this.setState({ id: id + 1 });
  }

  handleValue(e) {
    this.setState({ value: e.target.value });
  }

  handleCurrencie(e) {
    this.setState({ currency: e.target.value });
  }

  handleMethod(e) {
    this.setState({ method: e.target.value });
  }

  handleTag(e) {
    this.setState({ tag: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  renderOptions() {
    const { exchanges } = this.props;
    return Object.values(exchanges).map((coin, index) => index !== 1 && (
      <option
        name="coin"
        key={ index }
        ask={ coin.ask }
        title={ coin.name }
      >
        { coin.code }
      </option>
    ));
  }

  render() {
    const { isFetching } = this.props;
    const { ask } = this.state;
    if (ask === 0) {
      const halfSecond = 500;
      setTimeout(() => this.setInitialAsk(), halfSecond);
    }
    return (
      <form
        className="addCurrencies-form"
        onSubmit={ (e) => {
          e.preventDefault();
          return this.getExpenseData();
        } }
      >
        <ValueInput handler={ this.handleValue } />
        <label htmlFor="coin">
          Moeda:
          <select
            id="coin"
            className="input is-success"
            onChange={ this.handleCurrencie }
          >
            { isFetching === 'success' ? this.renderOptions() : console.log('waiting') }
          </select>
        </label>
        <PayMethCombox handler={ this.handleMethod } />
        <TagOptions handler={ this.handleTag } />
        <DescriptionInput handler={ this.handleDescription } />
        <button
          type="submit"
          className="button is-info"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

AddCurrencies.propTypes = {
  addExpense: PropTypes.func,
  exchanges: PropTypes.objectOf(PropTypes.object),
  isFetching: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  exchanges: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseAction: (expense) => dispatch(addExpense(expense)),
  fetchExchangeRateThunk: (id) => dispatch(fetchExchangeRate(id)),
  sumExpenseValues: (expense) => dispatch(sumValues(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrencies);
