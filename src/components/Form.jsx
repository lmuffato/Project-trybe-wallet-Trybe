import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAPI, expensesAction } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderInputDescription = this.renderInputDescription.bind(this);
    this.renderExchangeSelect = this.renderCoinSelect.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { currencies, setGlobalExpenses, getApi } = this.props;
    getApi();
    console.log(currencies);
    const payloader = {
      ...this.state,
      exchangeRates: currencies,
    };

    setGlobalExpenses(payloader);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  renderInputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          value={ value }
          name="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCoinSelect() {
    const { currencies } = this.props;
    const keys = Object.keys(currencies);
    const excluded = 'USDT';
    const filtered = keys.filter((each) => each !== excluded);

    return (
      <label htmlFor="coins">
        Moeda
        <select
          id="coins"
          name="currency"
          value="currency"
          onChange={ this.handleChange }
        >
          {filtered.map((eachCoin) => (
            <option value={ eachCoin } key={ eachCoin }>
              { eachCoin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentSelect() {
    const paymentMethods = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          {paymentMethods.map((eachMethod) => (
            <option
              key={ eachMethod }
              value={ eachMethod }
            >
              {eachMethod}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderTag() {
    const consumptionTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          {consumptionTag.map((eachTag) => (
            <option
              value={ eachTag }
              key={ eachTag }
            >
              {eachTag}
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderInputValue() }
          { this.renderInputDescription() }
          { this.renderCoinSelect() }
          { this.renderPaymentSelect() }
          { this.renderTag() }
          <button onClick={ this.addExpense } type="submit">
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  getApi: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
  setGlobalExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispachToProps = (dispatch) => ({
  getApi: () => dispatch(requestAPI()),
  setGlobalExpenses: (payload) => dispatch(expensesAction(payload)),
});

export default connect(mapStateToProps, mapDispachToProps)(Form);
