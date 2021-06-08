import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, addExpense } from '../actions';

const INITIAL_STATE = {
  id: '',
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
};

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.newExpense = this.newExpense.bind(this);
  }

  componentDidMount() {
    this.requestCurrencies();
  }

  getState() {
    const { sendExpense } = this.props;
    const localState = this.state;
    const { id } = this.state;
    const payload = { localState, id };
    sendExpense(payload);
    this.setState(INITIAL_STATE);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  requestCurrencies() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async newExpense() {
    const { currencies, globalId } = this.props;
    this.requestCurrencies();
    const newId = globalId + 1;
    this.setState({
      id: newId,
      exchangeRates: currencies,
    }, () => this.getState());
  }

  renderInputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="number"
          data-testid="value-input"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          data-testid="description-input"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrencyInput() {
    const { currencies } = this.props;
    const { currency } = this.state;
    const currenciesArray = Object.values(currencies)
      .filter((curr) => curr.codein !== 'BRLT');
    return (
      <select
        value={ currency }
        id="currency"
        onChange={ this.handleChange }
        data-testid="currency-input"
      >
        <option>Moeda</option>
        {
          currenciesArray.map((e) => (
            <option
              key={ Math.random() + 1 }
              data-testid={ e.code }
              value={ e.code }
            >
              {e.code}
            </option>
          ))
        }
      </select>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <select
        value={ method }
        onChange={ this.handleChange }
        id="method"
        data-testid="method-input"
      >
        <option>Pagamento</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  renderTagExpense() {
    const { tag } = this.state;
    return (
      <select
        onChange={ this.handleChange }
        id="tag"
        value={ tag }
        data-testid="tag-input"
      >
        <option>TAG</option>
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  renderAddExpenseButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.newExpense }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }

  render() {
    return (
      <form>
        {this.renderInputValue()}
        {this.renderDescriptionInput()}
        {this.renderCurrencyInput()}
        {this.renderMethod()}
        {this.renderTagExpense()}
        {this.renderAddExpenseButton()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  globalId: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrency()),
  sendExpense: (payload) => dispatch(addExpense(payload)),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.object,
  getCurrencies: PropTypes.func,
  sendExpense: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
