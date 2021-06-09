import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrency from '../services/api';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.handleCurrency();
  }

  async handleCurrency() {
    const items = await fetchCurrency();
    const obj = Object.keys(items);
    this.setState({ currencies: obj });
  }

  render() {
    const { user } = this.props;
    const { currencies } = this.state;
    return (
      <>
        <header>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
          <p data-testid="total-field">Valor total: 0</p>
          <h6 data-testid="email-field">{user}</h6>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>
          <label htmlFor="moneyCurrency">
            Moeda:
            <select id="moneyCurrency">
              {currencies.map((currency) => (
                <option value={ currency } key={ currency }>{currency}</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="type">
            Tag
            <select id="type">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Wallet.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
