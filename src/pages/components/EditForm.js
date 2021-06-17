import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurruencies, addExpenses, finishEditExpense } from '../../actions/index';
import fetchCurrencies from '../../api/api';
import './CSS/editForm.css';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    const { dispatchgetCurruencies } = this.props;
    dispatchgetCurruencies();
  }

  async getApi() {
    const response = await fetchCurrencies();
    return response;
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleInput(l, n, d) {
    const { upExpense } = this.props;
    return (
      <label htmlFor={ n }>
        { l}
        <input
          type="text"
          name={ n }
          id={ n }
          onChange={ this.handleChange }
          defaultValue={ upExpense[n] }
          data-testid={ d }
        />
      </label>
    );
  }

  handleSelect(l, n, array, d) {
    const { upExpense } = this.props;
    return (
      <label htmlFor={ n }>
        { l}
        <select
          name={ n }
          id={ n }
          onChange={ this.handleChange }
          defaultValue={ upExpense[n] }
          data-testid={ d }
        >
          {array.map((a) => <option key={ a } value={ a }>{a}</option>)}
        </select>
      </label>
    );
  }

  async handleClick(event) {
    event.preventDefault();
    const { upExpense, expenses, finishEdit } = this.props;
    // const rates = await this.getApi();
    const oldRates = upExpense.exchangeRates;
    // console.log(oldRates);
    const updatadExpenses = expenses.map((expense) => {
      if (expense.id === upExpense.id) {
        expense = ({
          id: upExpense.id,
          ...this.state,
          exchangeRates: oldRates,
        });
      }
      return expense;
    });
    finishEdit(updatadExpenses);
  }

  render() {
    const { currencys } = this.props;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form className="expense-edit">
        { this.handleInput('Valor:', 'value', 'value-input') }
        { this.handleInput('Descrição:', 'description', 'description-input') }
        { this.handleSelect('Moeda:', 'currency', currencys, 'currency-input') }
        { this.handleSelect('Método de pagamento:', 'method', methods, 'method-input') }
        { this.handleSelect('Tag:', 'tag', tags, 'tag-input') }
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="edit-btn"
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchgetCurruencies: () => dispatch(getCurruencies()),
  getExpenses: (obj) => dispatch(addExpenses(obj)),
  finishEdit: (e) => dispatch(finishEditExpense(e)),
});

const mapStateToProps = (state) => ({
  currencys: state.wallet.currencies,
  expenses: state.wallet.expenses,
  upExpense: state.wallet.expense,
});

EditForm.propTypes = {
  dispatchgetCurruencies: PropTypes.func,
  getExpenses: PropTypes.func,
  finishEdit: PropTypes.func,
  currencies: PropTypes.string,
  expenses: PropTypes.array,
  upExpense: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
