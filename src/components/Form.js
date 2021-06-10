import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import { getCurrencies as getCurrenciesThunk } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.renderCurrencies = this.renderCurrencies.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderPaymentMethods = this.renderPaymentMethods.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderCurrencies() {
    const { currencies } = this.props;
    const { currency } = this.state;

    return (
      <select
        name="currency"
        value={ currency }
        id="currency"
        onChange={ (e) => this.handleChange(e) }
      >
        {currencies.map((currencyItem, index) => (
          <option
            key={ index }
            value={ currencyItem }
          >
            {currencyItem}
          </option>
        ))}
      </select>
    );
  }

  renderTags() {
    const { tag } = this.state;

    return (
      <select
        name="tag"
        value={ tag }
        id="tag"
        onChange={ (e) => this.handleChange(e) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  renderPaymentMethods() {
    const { method } = this.state;

    return (
      <select
        name="method"
        value={ method }
        id="method"
        onChange={ (e) => this.handleChange(e) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  render() {
    const { value, description } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="string"
              name="value"
              id="value"
              value={ value }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            {this.renderCurrencies()}
          </label>
          <label htmlFor="method">
            Método de pagamento:
            {this.renderPaymentMethods()}
          </label>
          <label htmlFor="tag">
            Tag:
            {this.renderTags()}
          </label>
          <AddButton expense={ this.state } />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getCurrencies: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
