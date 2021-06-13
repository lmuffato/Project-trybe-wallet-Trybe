import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getCurrenciesThunk,
  getAndSaveCurrenciesThunk,
} from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputsForm = this.inputsForm.bind(this);
    this.selectsForm = this.selectsForm.bind(this);
  }

  componentDidMount() {
    const { getCurrenciesAPI } = this.props;
    getCurrenciesAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { expenses } = this.props;
    this.setState({
      id: expenses.length ? expenses.length : 0,
      [name]: value,
    });
  }

  handleSubmit() {
    const { submitExpense } = this.props;
    submitExpense(this.state);
    this.setState({
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  inputsForm() {
    const { value, description } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
            id="value"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            id="description"
          />
        </label>
      </div>
    );
  }

  selectsForm() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            id="currency"
          >
            { currencies.map((currencyOpt) => (
              <option key={ currencyOpt }>{currencyOpt}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            value={ method }
            onChange={ this.handleChange }
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
            id="tag"
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

  render() {
    return (
      <form>
        { this.inputsForm() }
        { this.selectsForm() }

        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesAPI: () => dispatch(getCurrenciesThunk()),
  submitExpense: (payload) => dispatch(getAndSaveCurrenciesThunk(payload)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  getCurrenciesAPI: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
