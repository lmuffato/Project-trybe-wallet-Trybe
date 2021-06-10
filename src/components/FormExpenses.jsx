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
      <div className="row">
        <div className="col-sm-3">
          <label htmlFor="value" className="form-label">
            Valor:
            <input
              type="number"
              id="value"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              className="form-control form-control-sm"
            />
          </label>
        </div>
        <div className="col-sm-7">
          <label htmlFor="description" className="form-label">
            Descrição:
            <input
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              className="form-control form-control-sm"
            />
          </label>
        </div>
      </div>
    );
  }

  coinForm() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <div className="row">
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
            className="form-select form-select-sm"
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
      <div className="row">
        <div className="col-sm-7">
          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              value={ method }
              data-testid="method-input"
              name="method"
              onChange={ this.handleChange }
              className="form-select form-select-sm"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              value={ tag }
              name="tag"
              onChange={ this.handleChange }
              className="form-select form-select-sm"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </div>
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
      <section className="head-input p-3">
        <form className="d-flex justify-content-between align-items-center mx-5">
          { this.valueDescriptionForm() }
          { this.coinForm() }
          { this.selectForms() }
          <div>
            <button
              type="button"
              onClick={ () => this.newExpenses() }
              className="btn btn-dark btn-sm mt-3"
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </section>
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
