import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsOnClickThunk, getCoinsThunk } from '../../actions';

class ExpensesAddForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  handleChange({ target }) {
    const { expenses } = this.props;
    const { value, name } = target;
    this.setState({
      id: expenses.length ? expenses.length : 0,
      [name]: value,
    });
  }

  handleClick() {
    const { requestCoinsOnClick } = this.props;
    requestCoinsOnClick(this.state);
    this.setState({
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  renderSelects() {
    const { currencies } = this.props;

    return (
      <div>
        <label htmlFor="currency" id="currency">
          Moeda
          <select
            name="currency"
            aria-labelledby="currency"
            onChange={ this.handleChange }
          >
            {!currencies ? <option value="BRL">BRL</option> : currencies.map((curr) => (
              <option key={ curr } value={ curr }>{ curr }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method" id="method">
          Método de pagamento
          <select
            name="method"
            aria-labelledby="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" id="tag">
          Tag
          <select
            name="tag"
            aria-labelledby="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      // https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
      <form>
        <label htmlFor="value" id="value">
          Valor
          <input
            type="text"
            name="value"
            aria-labelledby="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description" id="description">
          Descrição
          <textarea
            type="text"
            name="description"
            aria-labelledby="description"
            onChange={ this.handleChange }
          />
        </label>
        { this.renderSelects() }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
  requestCoinsOnClick: (payload) => dispatch(getCoinsOnClickThunk(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

ExpensesAddForm.propTypes = {
  getCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesAddForm);
