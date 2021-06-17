import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyAPI } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.getCurrency = this.getCurrency.bind(this);
    this.renderExpense = this.renderExpense.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getId = this.getId.bind(this);
    this.getNewState = this.getNewState.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  getCurrency() {
    const { currencies } = this.props;
    return (Object.keys({ ...currencies })
      .filter((key) => key !== 'USDT'));
  }

  getId() {
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  getNewState(state) {
    const { newFetch } = this.props;
    this.getId();
    newFetch(state);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          value={ description }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  renderExpense() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          step={ 0 }
          min={ 0 }
          value={ value }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ (event) => this.handleChange(event) }
        >
          { this.getCurrency()
            .map((currencyValue, index) => (
              <option key={ index }>
                {currencyValue}
              </option>))}
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ (event) => this.handleChange(event) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ (event) => this.handleChange(event) }
        >
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
    const { state } = this;
    return (
      <div>
        <form>
          { this.renderExpense() }
          { this.renderDescription() }
          { this.renderCurrency() }
          { this.renderPaymentMethod() }
          { this.renderTag() }
          <button
            type="button"
            onClick={ () => {
              this.getNewState(state);
            } }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({ currencies });

const mapDispatchToProps = (dispatch) => ({
  newFetch: (state) => dispatch(fetchCurrencyAPI(state)),
});

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
