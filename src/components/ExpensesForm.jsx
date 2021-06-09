import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk, saveExpenseThunk } from '../actions';
import Select from './Select';
import { selectCurrencies,
  selectPayment,
  selectType,
  paymentsOptions,
  typeOptions,
} from '../services/selects';

const INITIAL_STATE = {
  value: 0,
  description: '',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    this.getFirstCurrency();
  }

  getFirstCurrency() {
    const { currencies } = this.props;
    this.setState({
      currency: currencies[0],
    });
  }

  validateForm() {
    const { value, description, currency, method, tag } = this.state;
    const { saveExpenses, expenses } = this.props;
    if (value > 0 && description && currency && method && tag) {
      const expensesObject = this.state;
      expensesObject.id = expenses.length;
      saveExpenses(expensesObject);
      this.getFirstCurrency();
    }
    this.setState(INITIAL_STATE);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method: payment, tag: type } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <Select
          options={ currencies }
          infos={ selectCurrencies }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          options={ paymentsOptions }
          infos={ selectPayment }
          value={ payment }
          onChange={ this.handleChange }
        />
        <Select
          options={ typeOptions }
          infos={ selectType }
          value={ type }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.validateForm }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { currencies, expenses } }) => ({
  email,
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  saveExpenses: (state) => dispatch(saveExpenseThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  email: PropTypes.string,
}.isRequired;
