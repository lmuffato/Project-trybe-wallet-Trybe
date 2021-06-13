import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import {
  getCurrencies as getCurrenciesThunk,
  saveEditExpense as saveEditExpenseAction,
} from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.handleShouldUpdate = this.handleShouldUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fillEditForm = this.fillEditForm.bind(this);
    this.renderCurrencies = this.renderCurrencies.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderPaymentMethods = this.renderPaymentMethods.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      shouldUpdate: true,
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate() {
    const { expenseToEdit } = this.props;
    const { shouldUpdate } = this.state;
    if (!(JSON.stringify(expenseToEdit) === '{}' || shouldUpdate)) {
      this.fillEditForm(expenseToEdit);
    }
  }

  fillEditForm(expenseToEdit) {
    const { value, description, currency, method, tag } = expenseToEdit;
    this.setState({
      value,
      description,
      currency,
      method,
      tag,
      shouldUpdate: false,
    });
  }

  handleShouldUpdate() {
    this.setState({ shouldUpdate: true });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderCurrencies() {
    const { currencies } = this.props;
    const { currency } = this.state;

    return (
      <select
        name="currency"
        value={ currency }
        id="currency"
        data-testid="currency-input"
        onChange={ (e) => this.handleChange(e) }
      >
        {currencies.map((currencyItem, index) => (
          <option
            key={ index }
            value={ currencyItem }
          >
            {currencyItem}
          </option>
        ))}
      </select>
    );
  }

  renderTags() {
    const { tag } = this.state;

    return (
      <select
        name="tag"
        value={ tag }
        id="tag"
        data-testid="tag-input"
        onChange={ (e) => this.handleChange(e) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  renderPaymentMethods() {
    const { method } = this.state;

    return (
      <select
        name="method"
        value={ method }
        id="method"
        data-testid="method-input"
        onChange={ (e) => this.handleChange(e) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  render() {
    const { value, description } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              name="value"
              id="value"
              data-testid="value-input"
              value={ value }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
              value={ description }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            {this.renderCurrencies()}
          </label>
          <label htmlFor="method">
            Método de pagamento:
            {this.renderPaymentMethods()}
          </label>
          <label htmlFor="tag">
            Tag:
            {this.renderTags()}
          </label>
          <AddButton
            expense={ this.state }
            handleShouldUpdate={ this.handleShouldUpdate }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  saveEditExpense: (expense) => dispatch(saveEditExpenseAction(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenseToEdit: state.wallet.expenseToEdit,
  shouldFillEditForm: state.wallet.shouldFillEditForm,
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseToEdit: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
