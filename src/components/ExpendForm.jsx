import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyAPI from '../services/api';
import { walletAddExpense } from '../actions';
import './expendForm.css';

class ExpendForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.addExpend = this.addExpend.bind(this);
    this.renderInputNumber = this.renderInputNumber.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.methodTag = this.methodTag.bind(this);
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async addExpend() {
    const { userAddExpense } = this.props;
    const getData = await currencyAPI();

    await this.setState({ exchangeRates: getData });
    userAddExpense(this.state);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  methodTag() {
    const { tag, method } = this.state;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento
          <select
            value={ method }
            onChange={ this.handleInput }
            className="input-f"
            id="method"
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            value={ tag }
            onChange={ this.handleInput }
            className="input-f"
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  renderInputNumber() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          className="input-f"
          value={ value }
          type="number"
          id="value"
          name="value"
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { currency, description } = this.state;
    return (
      <div className="expend-div">
        <form className="expend-form">
          {this.renderInputNumber()}
          <label htmlFor="description">
            Descrição
            <input
              className="input-f"
              value={ description }
              type="text"
              id="description"
              name="description"
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              onChange={ this.handleInput }
              value={ currency }
              className="input-f"
              name="currency"
              id="currency"
            >
              {currencies.map((currencie) => (
                <option key={ currencie } value={ currencie }>{ currencie }</option>
              ))}
            </select>
          </label>
          {this.methodTag()}
          <button id="add-button" type="button" onClick={ this.addExpend }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  userAddExpense: (payload) => dispatch(walletAddExpense(payload)),
});

const secondMapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

ExpendForm.propTypes = {
  userAddExpense: PropTypes.func,
  currencies: PropTypes.shape({}),
}.isRequired;

export default connect(secondMapStateToProps, secondMapDispatchToProps)(ExpendForm);
