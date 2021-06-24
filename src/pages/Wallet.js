import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import api from '../api';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.handleCurr();
  }

  async handleCurr() {
    const items = await api();
    const arrayObj = Object.keys(items);
    arrayObj.splice(1, 1);
    this.setState({ currencies: arrayObj });
  }

  render() {
    const { user } = this.props;
    const { currencies } = this.state;
    return (
      <>
        <header>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
          <p data-testid="total-field">Valor total: 0</p>
          <h5 data-testid="email-field">{user}</h5>
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
              {currencies.map((cur) => (
                <option value={ cur } key={ cur }>{cur}</option>
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
