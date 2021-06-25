import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkActionCoins } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: [],
    };

    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderInputDescription = this.renderInputDescription.bind(this);
    this.renderExchangeSelect = this.renderCoinSelect.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  setExpense() {
    const { currency } = this.props;
    console.log(currency);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
    const { currency } = this.state;

    return (
      <label htmlFor="coins">
        Moeda
        <select
          id="coins"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((eachCoin) => (
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
    const { email } = this.props;

    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          { this.renderInputValue() }
          { this.renderInputDescription() }
          { this.renderCoinSelect() }
          { this.renderPaymentSelect() }
          { this.renderTag() }
          <button onClick={ this.setExpense() } type="submit">
            Adicionar despesas
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispachToProps = (dispatch) => ({
  getApi: () => dispatch(thunkActionCoins()),
});

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
