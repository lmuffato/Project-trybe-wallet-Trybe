import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';
import ValueInput from './ValueInput';
import PayMethCombox from './PayMethCombox';
import TagOptions from './TagOptions';
import DescriptionInput from './DescriptionInput';

class AddCurrencies extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currencie: 'BRL',
      method: 'Crédito',
      tag: 'Lazer',
      description: '',
    };
    this.renderOptions = this.renderOptions.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleCurrencie = this.handleCurrencie.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.getExpenseData = this.getExpenseData.bind(this);
  }

  getExpenseData() {
    const { addExpenseAction, totalEx } = this.props;
    const halfSecond = 500;
    setTimeout(() => totalEx(), halfSecond);
    return addExpenseAction(this.state);
  }

  handleValue(e) {
    this.setState({ value: e.target.value });
  }

  handleCurrencie(e) {
    this.setState({ currencie: e.target.value });
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
    return Object.values(exchanges).map((coin, index) => (
      <option
        name="coin"
        key={ index }
        title={ coin.name }
      >
        {coin.code}
      </option>
    ));
  }

  render() {
    const { isFetching } = this.props;
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
            data-testid="header-currency-field"
          >
            <option name="coin"> BRL </option>
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
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseAction: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrencies);
