import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEditExpense } from '../actions';
import Select from './Select';
import { selectCurrencies,
  selectPayment,
  selectType,
  paymentsOptions,
  typeOptions,
} from '../services/selects';

class ExpensesFormEdit extends React.Component {
  constructor(props) {
    super(props);
    const {
      edit:
      { value,
        description,
        currency,
        method,
        tag },
    } = props;
    const INITIAL_STATE = {
      value,
      description,
      method,
      tag,
      currency,
    };
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    const { value, description, currency, method, tag } = this.state;
    const { editExpense, edit, expenses } = this.props;
    if (value > 0 && description && currency && method && tag) {
      const expense = { ...edit, value, description, currency, method, tag };
      editExpense(expense, expenses);
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderInputs(value, description) {
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            data-testid="value-input"
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
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
      </>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        { this.renderInputs(value, description) }
        <Select
          testid="currency-input"
          options={ currencies }
          infos={ selectCurrencies }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          testid="method-input"
          options={ paymentsOptions }
          infos={ selectPayment }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          testid="tag-input"
          options={ typeOptions }
          infos={ selectType }
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.validateForm }>Editar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses, currencies, edit } }) => ({
  expenses,
  edit,
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense, expenses) => dispatch(saveEditExpense(expense, expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFormEdit);

ExpensesFormEdit.propTypes = {
  currencies: PropTypes.array,
}.isRequired;
