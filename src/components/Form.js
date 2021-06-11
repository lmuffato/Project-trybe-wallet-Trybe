import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, getExpensesThunk } from '../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selects = this.selects.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { expenses, getExpenses } = this.props;
    const id = expenses.length;
    getExpenses({ ...this.state, id });
  }

  selects() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            aria-label="moeda"
            onChange={ this.handleChange }
          >
            {currencies.map((item) => (
              <option key={ item.code } value={ item.code }>
                { item.code }
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            aria-label="método de pagamento"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            aria-label="tag"
            onChange={ this.handleChange }
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
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              name="value"
              type="text"
              aria-label="valor"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              name="description"
              type="text"
              aria-label="descrição"
              onChange={ this.handleChange }
            />
          </label>
          { this.selects() }
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.objectOf({}).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  getExpenses: (value) => dispatch(getExpensesThunk(value)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
