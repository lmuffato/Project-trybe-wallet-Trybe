import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCurrentMoneyAPILocation from '../services/MoneyAPI';
import { thunkMoneyAPI, addExpenses } from '../actions';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.addingExpenses = this.addingExpenses.bind(this);
    this.handleFields = this.handleFields.bind(this);
    // just to pass the fu## lint the next funcs
    this.showTags = this.showTags.bind(this);
    this.showMethods = this.showMethods.bind(this);
  }

  componentDidMount() {
    const { currenciesAll } = this.props;
    currenciesAll();
  }

  async addingExpenses() {
    const { expensesAdded } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const response = await getCurrentMoneyAPILocation();
    this.setState((initial) => ({ id: initial.id + 1 }));
    expensesAdded({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: response,
    });
  }

  handleFields({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  showMethods() {
    const { method } = this.state;
    return (
      <label htmlFor="selected-in-payment" data-testid="select-label-payment">
        Método de pagamento
        <select
          id="selected-in-payment"
          name="method"
          value={ method }
          onChange={ (res) => this.handleFields(res) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  showTags() {
    const { tag } = this.state;
    return (
      <label htmlFor="selected-in-tag" data-testid="select-label-tag">
        Tag
        <select
          id="selected-in-tag"
          name="tag"
          value={ tag }
          onChange={ (res) => this.handleFields(res) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency } = this.state;
    return (
      <div>
        <form data-testid="wallet-form">
          <label htmlFor="number-in" data-testid="number-input-label">
            Valor
            <input
              type="number"
              name="value"
              onChange={ this.handleFields }
              value={ value }
              id="number-in"
            />
          </label>
          <label htmlFor="text-in" data-testid="text-input-label">
            Descrição
            <input
              type="text"
              name="description"
              onChange={ this.handleFields }
              value={ description }
              id="text-in"
            />
          </label>
          <label htmlFor="selected-in" data-testid="select-input-label">
            Moeda
            <select
              id="selected-in"
              name="currency"
              onChange={ this.handleFields }
              value={ currency }
            >
              {currencies.map((curren) => <option key={ curren }>{curren}</option>)}
            </select>
          </label>
          {this.showMethods()}
          {this.showTags()}
          <button type="button" onClick={ this.addingExpenses }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesAll: () => dispatch(thunkMoneyAPI()),
  expensesAdded: (state) => dispatch(addExpenses(state)),
});

Forms.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesAdded: PropTypes.func.isRequired,
  currenciesAll: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
