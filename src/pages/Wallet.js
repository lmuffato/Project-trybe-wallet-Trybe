import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const fixingAsync = Object.create(Promise);
fixingAsync.prototype.await = Promise.prototype.then;
const async = (callback, ...params) => callback(...params);

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.form = this.form.bind(this);
  }

  componentDidMount() {
    async(fetch, 'https://economia.awesomeapi.com.br/json/all')
      .await((response) => response.json())
      .await((data) => Object
        .keys(data)
        .filter((key) => key !== 'USDT'))
      .await((currencies) => this.setState({ currencies }));
  }

  header() {
    const { email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">
          0
        </h2>
        <h2 data-testid="header-currency-field">
          BRL
        </h2>
      </header>
    );
  }

  form() {
    const { currencies } = this.state;
    return (
      <form>
        <label id="value" htmlFor="value">
          Valor
          <input aria-labelledby="value" type="text" name="value" />
        </label>
        <label id="description" htmlFor="description">
          Descrição
          <textarea aria-labelledby="description" name="description" />
        </label>
        <label id="currency" htmlFor="currency">
          Moeda
          <select aria-labelledby="currency" name="currency">
            {currencies.map(
              (currency, key) => (
                <option
                  value={ currency }
                  key={ key }
                >
                  {currency}
                </option>
              ),
            )}
          </select>
        </label>
        <label id="payment-method" htmlFor="payment-method">
          Método de pagamento
          <select aria-labelledby="payment-method" name="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label id="tag" htmlFor="tag">
          Tag
          <select aria-labelledby="tag" name="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      <>
        {this.header()}
        <section>
          <h1>TrybeWallet</h1>
        </section>
        {this.form()}
      </>
    );
  }
}
const mapStateToProps = ({ user: { email } }) => ({ email });

Wallet.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
