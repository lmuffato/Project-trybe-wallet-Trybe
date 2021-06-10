import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, storeExpense } from '../../../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      tags: {
        food: 'Alimentação',
        leisure: 'Lazer',
        work: 'Trabalho',
        transport: 'Transporte',
        healthy: 'Saúde',
      },
      paymentOptions: {
        cash: 'Dinheiro',
        c_credit: 'Cartão de crédito',
        c_debit: 'Cartão de débito',
      },
      expense: {
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleInput({ target: { id, value } }) {
    const { expense } = this.state;
    this.setState({
      expense: { ...expense, [id]: value },
    });
  }

  submitExpense(event) {
    event.preventDefault();
    const { addExpense, getCurrencies, allCurrencies } = this.props;
    const { expense } = this.state;
    getCurrencies();
    addExpense({ ...expense, exchangeRates: allCurrencies });
  }

  render() {
    const { tags, paymentOptions } = this.state;
    // https://stackabuse.com/javascript-remove-a-property-from-an-object
    const { allCurrencies: { USDT, ...currencies } } = this.props;

    return (
      <form onSubmit={ this.submitExpense }>
        <label htmlFor="value">
          Valor:
          <input id="value" step="0.01" type="number" onChange={ this.handleInput } />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea id="description" onChange={ this.handleInput } />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ this.handleInput }>
            { Object.keys(currencies).map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            )) }
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ this.handleInput }>
            {Object.entries(paymentOptions).map(([value, name]) => (
              <option key={ value } value={ name }>{name}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ this.handleInput }>
            {Object.entries(tags).map(([value, name]) => (
              <option key={ value } value={ name }>{name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  allCurrencies: currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpense: (payload) => dispatch(storeExpense(payload)),
});

ExpensesForm.propTypes = {
  allCurrencies: PropTypes.object,
  getCurrencies: PropTypes.func,
  addExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
