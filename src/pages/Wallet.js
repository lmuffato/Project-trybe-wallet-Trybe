import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiThunk } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   current: 'USD',
    // };

    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderInputDescription = this.renderInputDescription.bind(this);
    this.renderExchangeSelect = this.renderCoinSelect.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  renderInputValue() {
    return (
      <label htmlFor="valor">
        Valor
        <input type="text" id="valor" value="" />
      </label>
    );
  }

  renderInputDescription() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input type="text" id="descricao" />
      </label>
    );
  }

  renderCoinSelect() {
    const { currencies } = this.props;

    return (
      <label htmlFor="coins">
        Moeda
        <select id="coins" name="coins">
          {currencies.map((eachCoin) => (
            <option key={ eachCoin }>
              { eachCoin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentSelect() {
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select id="method">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Transporte</option>
          <option>Saúde</option>
          <option>Trabalho</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          { this.renderInputValue() }
          { this.renderInputDescription() }
          { this.renderCoinSelect() }
          { this.renderPaymentSelect() }
          { this.renderTag() }
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispachToProps = (dispatch) => ({
  getApi: () => dispatch(getApiThunk()),
});

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
