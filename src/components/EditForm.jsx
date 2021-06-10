import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showHideEdit, removeExpense, addExpense } from '../actions';

class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  componentDidMount() {
    this.currencies();
    this.initialState();
  }

  initialState() {
    const { expenses, editId, removeDispatch } = this.props;
    const myExpense = expenses.find((expense) => expense.id === editId);
    this.setState({
      value: myExpense.value,
      description: myExpense.description,
      currency: myExpense.currency,
      method: myExpense.method,
      tag: myExpense.tag,
      exchangeRates: myExpense.exchangeRates,
    });
    removeDispatch(editId);
  }

  async currencies() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await fetchAPI.json();
    this.setState({ exchangeRates });
  }

  handleClick() {
    const { editFormDispatch, addDispatch, editId } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    const myObj = {
      id: editId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    addDispatch(myObj);
    editFormDispatch(false);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  valueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          data-testid="value-input"
          id="value"
          name="value"
          value={ value }
          type="number"
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  descriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          data-testid="description-input"
          id="description"
          name="description"
          value={ description }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  currencyInput() {
    const { currency, exchangeRates } = this.state;
    const allCurrencies = Object.keys(exchangeRates);
    const myCurrencies = allCurrencies.filter((curency) => curency !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          type="select"
          id="currency"
          name="currency"
          value={ currency }
          onChange={ (event) => this.handleChange(event) }
        >
          {myCurrencies.map((currenc) => <option key={ currenc }>{currenc}</option>)}
        </select>
      </label>
    );
  }

  render() {
    const { method, tag } = this.state;
    return (
      <form>
        {this.valueInput()}
        {this.descriptionInput()}
        {this.currencyInput()}
        <label htmlFor="method">
          Método de pagamento
          <select
            data-testid="method-input"
            type="select"
            id="method"
            value={ method }
            name="method"
            onChange={ (event) => this.handleChange(event) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select
            data-testid="tag-input"
            type="select"
            id="category"
            name="tag"
            value={ tag }
            onChange={ (event) => this.handleChange(event) }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

EditForm.propTypes = {
  editFormDispatch: PropTypes.func.isRequired,
  removeDispatch: PropTypes.func.isRequired,
  addDispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editId: state.wallet.editId,
});

const mapDispatchToProps = (dispatch) => ({
  editFormDispatch: (bool) => dispatch(showHideEdit(bool)),
  removeDispatch: (id) => dispatch(removeExpense(id)),
  addDispatch: (obj) => dispatch(addExpense(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
