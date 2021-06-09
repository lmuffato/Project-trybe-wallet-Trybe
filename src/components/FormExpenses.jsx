import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin, getApiThunk } from '../actions';

class FormExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.valueDescriptionForm = this.valueDescriptionForm.bind(this);
    this.coinForm = this.coinForm.bind(this);
    this.selectForms = this.selectForms.bind(this);
  }

  componentDidMount() {
    const { getApiResponse } = this.props;
    getApiResponse();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  valueDescriptionForm() {
    const { value, description } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  coinForm() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
          >
            {currencies.map((curr) => (
              <option data-testid={ curr } key={ curr } value={ curr }>{curr}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  selectForms() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            value={ method }
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            value={ tag }
            name="tag"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  newExpenses() {
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState({
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  render() {
    return (
      <form className="d-flex">
        { this.valueDescriptionForm() }
        { this.coinForm() }
        { this.selectForms() }
        <button
          type="button"
          onClick={ () => this.newExpenses() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApiResponse: () => dispatch(getApiThunk()),
  addExpense: (expense) => dispatch(fetchCoin(expense)),
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  getApiResponse: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
