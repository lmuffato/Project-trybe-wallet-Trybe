import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   valor: '',
    // };

    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderInputDescription = this.renderInputDescription.bind(this);
    this.renderExchangeSelect = this.renderExchangeSelect.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTag = this.renderTag.bind(this);
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

  renderExchangeSelect() {
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">Opções de moeda</select>
      </label>
    );
  }

  renderPaymentSelect() {
    return (
      <label htmlFor="method">
        Método de Pagamento
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
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          { this.renderInputValue() }
          { this.renderInputDescription() }
          { this.renderExchangeSelect() }
          { this.renderPaymentSelect() }
          { this.renderTag() }
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
