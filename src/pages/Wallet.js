import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const API = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: {},
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ coins: data });
      });
  }

  render() {
    const { email } = this.props;
    const { coins } = this.state;

    return (
      <div>
        <header>
          <div data-testid="email-field">
            Email:
            {email}
          </div>
          <div data-testid="total-field">
            Total Despesas: 0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" name="value" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" name="descricao" />
          </label>
          <label htmlFor="coins">
            Moeda
            <select>
              {Object.keys(coins).filter((coin) => coin !== 'USDT').map((coin) => (
                <option key={ coin }>
                  {' '}
                  {coin}
                  {' '}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Caertão de débito</option>
            </select>
          </label>
        </form>
      </div>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
