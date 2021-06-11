import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';

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
    this.handleDescription = this.handleDescription.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.getExpenseData = this.getExpenseData.bind(this);
    this.renderMethodOptions = this.renderMethodOptions.bind(this);
    this.renderTagOptions = this.renderTagOptions.bind(this);
    this.renderDescriptionInput = this.renderDescriptionInput.bind(this);
    this.renderValueInput = this.renderValueInput.bind(this);
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
        title={ coin.name.split('/').shift() }
      >
        {coin.code}
      </option>
    ));
  }

  renderMethodOptions() {
    return (
      <>
        <option name="payment-method"> Crédito </option>
        <option name="payment-method"> Débito </option>
        <option name="payment-method"> Dinheiro </option>
      </>
    );
  }

  renderTagOptions() {
    return (
      <>
        <option name="tag"> Lazer </option>
        <option name="tag"> Alimentação </option>
      </>
    );
  }

  renderDescriptionInput() {
    return (
      <input
        type="text"
        name="desc"
        className="input is-success"
        onChange={ this.handleDescription }
      />
    );
  }

  renderValueInput() {
    return (
      <input
        type="number"
        name="value"
        className="input is-success"
        onChange={ this.handleValue }
      />
    );
  }

  render() {
    const { isFetching } = this.props;
    const inputCl = 'input is-success';
    return (
      <form className="addCurrencies-form">
        <label htmlFor="value">
          <h3 className="subtitle"> Valor </h3>
          { this.renderValueInput() }
        </label>
        <label htmlFor="coin">
          <h3 className="subtitle"> Moeda </h3>
          <select id="coin" className={ inputCl } onChange={ this.handleCurrencie }>
            <option name="coin"> BRL </option>
            { isFetching === 'success' ? this.renderOptions() : console.log('awaiting') }
          </select>
        </label>
        <label htmlFor="payment-method">
          <h3 className="subtitle"> Método de pagamento </h3>
          <select
            name="payment-method"
            className={ inputCl }
            data-testid="header-currency-field"
            onChange={ this.handleMethod }
          >
            { this.renderMethodOptions() }
          </select>
        </label>
        <label htmlFor="tag">
          <h3 className="subtitle"> Tipo </h3>
          <select name="tag" className={ inputCl } onChange={ this.handleMethod }>
            { this.renderTagOptions() }
          </select>
        </label>
        <label htmlFor="desc">
          <h3 className="subtitle "> Descrição </h3>
          { this.renderDescriptionInput() }
        </label>
        <button
          type="button"
          className="button is-info"
          onClick={ this.getExpenseData }
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
