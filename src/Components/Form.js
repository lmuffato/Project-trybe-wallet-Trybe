import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currencies: '',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  selectCurrency(currenciesCode, currencies) {
    return (
      <label htmlFor="Moeda">
        Moeda:
        <select
          value={ currencies }
          name="Moeda"
          id="Moeda"
          onChange={ this.handleChange }
        >
          {currenciesCode.map((currency, index) => (
            <option key={ index }>
              {currency.code}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderValue(value) {
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="text"
          value={ value }
          name="value"
          id="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderPayment(payment) {
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          value={ payment }
          name="payment"
          id="payment"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Crédito">Cartão de crédito</option>
          <option value="Debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderDescription(description) {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          value={ description }
          name="description"
          id="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTag(tag) {
    return (
      <label htmlFor="tag">
        Tag:
        <select value={ tag } name="tag" id="tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currenciesCode } = this.props;
    const { value, description, currencies, payment, tag } = this.state;
    return (
      <form>
        {this.renderValue(value)}
        {this.renderDescription(description)}
        {this.selectCurrency(currenciesCode, currencies)}
        {this.renderPayment(payment)}
        {this.renderTag(tag)}
        <button type="button"> Adicionar Despesa </button>
      </form>
    );
  }
}
Form.propTypes = {
  currenciesCode: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currenciesCode: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
