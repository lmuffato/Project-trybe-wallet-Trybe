import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, addExpense } from '../actions';
import './ExpensesForm.css';

const INITIAL_STATE = {
  id: '',
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
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
    const { sendExpense, currencies } = this.props;
    const localState = { ...this.state, exchangeRates: currencies };
    // const totalAmount = Number(this.headerSum(localState));
    const { id } = this.state;
    const payload = { localState, id /* , totalAmount */ };
    sendExpense(payload);
    this.setState(INITIAL_STATE);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  requestCurrencies() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  newExpense() {
    const { globalId } = this.props;
    this.requestCurrencies();
    const newId = globalId + 1;
    this.setState({
      id: newId,
    }, () => this.getState());
  }

  renderInputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="valor" className="labels">
        Valor
        <input
          className="inputs"
          name="value"
          id="valor"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="Descrição" className="labels">
        Descrição
        <input
          className="inputs"
          name="description"
          id="Descrição"
          type="text"
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
      <label htmlFor="moeda" className="labels">
        Moeda
        <select
          className="inputs"
          name="currency"
          value={ currency }
          id="moeda"
          onChange={ this.handleChange }
        >
          {
            currenciesArray.map((e) => (
              <option
                key={ Math.random() + 1 }
                value={ e.code }
              >
                {e.code}
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="Método de pagamento" className="labels">
        Método de pagamento
        <select
          className="inputs"
          name="method"
          value={ method }
          onChange={ this.handleChange }
          id="Método de pagamento"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagExpense() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag" className="labels">
        Tag
        <select
          className="inputs"
          name="tag"
          onChange={ this.handleChange }
          id="tag"
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderAddExpenseButton() {
    return (
      <div>
        <button
          type="button"
          className="buttons"
          onClick={ this.newExpense }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }

  render() {
    return (
      <form className="expForm-container">
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
