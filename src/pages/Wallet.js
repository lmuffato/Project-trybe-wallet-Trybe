import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      expenses: {
        id: 0,
        currency: 'USD',
        tag: 'Alimentação',
        method: 'Dinheiro',
        value: 0,
        description: '',
        exchangeRates: {},
      },
    };
  }

  async componentDidMount() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const obj = await response.json();
    const data = Object.keys(obj).filter((element) => element !== 'USDT');
    this.getCurrency(data);
  }

  getCurrency(data) {
    this.setState({ coins: data });
  }

  hundleChange({ target }) {
    const expenses = this.state;
    const { id, value } = target;
    expenses[id] = value;
    this.setState({
      expenses,
    });
  }

  render() {
    const { email } = this.props;
    const { coins } = this.state;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" id="value" onChange={ this.hundleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" onChange={ this.hundleChange } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" onChange={ this.hundleChange } name="moeda">
              { coins.map((coin, index) => <option key={ index }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" name="method" onChange={ this.hundleChange }>
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" onChange={ this.hundleChange }>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
