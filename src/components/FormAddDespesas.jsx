import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveCurrencies } from '../actions';

class FormAddDespesas extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.renderValor = this.renderValor.bind(this);
    this.renderDescricao = this.renderDescricao.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  componentDidMount() {
    const { getMoedas } = this.props;
    getMoedas();
  }

  handleInputs({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  renderMoeda(value) {
    const { currencies } = this.props;
    return (
      <label id="currency" htmlFor="currency">
        Moeda
        <select
          aria-labelledby="currency"
          value={ value }
          onChange={ this.handleInputs }
          name="currency"
        >
          <option value="USD">USD</option>
          { currencies.map((coin) => {
            if (coin !== 'USDT' && coin !== 'USD') {
              return (
                <option
                  value={ coin }
                  key={ coin }
                >
                  {coin}
                </option>
              );
            }
            return '';
          })}
        </select>
      </label>
    );
  }

  renderValor(value) {
    return (
      <label id="value-input" htmlFor="value-input">
        Valor:
        <input
          aria-labelledby="value-input"
          name="value"
          value={ value }
          onChange={ this.handleInputs }
        />
      </label>
    );
  }

  renderDescricao(value) {
    return (
      <label id="description-input" htmlFor="description-input">
        Descrição:
        <input
          aria-labelledby="description-input"
          value={ value }
          onChange={ this.handleInputs }
          name="description"
        />
      </label>
    );
  }

  renderMethod(value) {
    return (
      <label id="method" htmlFor="method">
        Método de pagamento
        <select
          aria-labelledby="method"
          onChange={ this.handleInputs }
          value={ value }
          name="method"
        >
          <option>Selecione uma opção</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag(value) {
    return (
      <label id="tag" htmlFor="tag">
        Tag
        <select
          aria-labelledby="tag"
          onChange={ this.handleInputs }
          value={ value }
          name="tag"
        >
          <option>Selecione uma opção</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          { this.renderValor(value) }
          { this.renderDescricao(description) }
          { this.renderMoeda(currency) }
          { this.renderMethod(method) }
          { this.renderTag(tag) }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getMoedas: () => dispatch(saveCurrencies()),
});

FormAddDespesas.propTypes = {
  currencies: PropTypes.arrayOf({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormAddDespesas);
