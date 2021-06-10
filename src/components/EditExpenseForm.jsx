import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEditedExpense } from '../actions';

const INITIAL_STATE = {
  id: '',
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  componentDidMount() {
    const { editId, expenses } = this.props;
    const values = expenses.filter((e) => e.id === editId);
    this.updateState(values[0]);
  }

  updateState(values) {
    const { id, method, tag, value, currency, description, exchangeRates } = values;
    this.setState({ id, value, description, currency, method, tag, exchangeRates });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  editExpense() {
    const { editExpenseAction } = this.props;
    const payload = this.state;
    editExpenseAction(payload, payload.id);
  }

  renderInputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor
        <input
          name="value"
          data-testid="value-input"
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
      <label htmlFor="Descrição">
        Descrição
        <input
          name="description"
          data-testid="description-input"
          id="Descrição"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrencyInput() {
    const { currency, exchangeRates } = this.state;
    const currenciesArray = Object.values(exchangeRates)
      .filter((curr) => curr.codein !== 'BRLT');
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="currency"
          data-testid="currency-input"
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
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          name="method"
          value={ method }
          data-testid="method-input"
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
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          data-testid="tag-input"
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

  renderEditExpenseButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.editExpense }
        >
          Editar despesa
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
        {this.renderEditExpenseButton()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editId: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  editExpenseAction: (payload, id) => dispatch(addEditedExpense(payload, id)),
});

EditExpenseForm.propTypes = {
  editExpenseAction: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseForm);
