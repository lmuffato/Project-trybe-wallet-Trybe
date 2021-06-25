import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpensesThunk, getAPIThunk } from '../actions/wallet';
import Input from './Input';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { addExpenses, expensesLenght } = this.props;
    addExpenses({ ...this.state, id: expensesLenght });
  }

  currencyInput() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="input-currency">
        Moeda
        <select
          name="currency"
          id="input-currency"
          onChange={ this.onChange }
          value={ currency }
        >
          {currencies.filter((curr) => curr !== 'USDT').map((currenc) => (
            <option key={ currenc } value={ currenc }>
              { currenc }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderInputs() {
    const { value, description } = this.state;
    return (
      <>
        <Input
          type="number"
          id="input-value"
          name="value"
          value={ value }
          onChange={ this.onChange }
          description="Valor"
        />
        <Input
          type="text"
          id="input-description"
          name="description"
          value={ description }
          onChange={ this.onChange }
          description="Descrição"
        />
      </>
    );
  }

  render() {
    const { method, tag } = this.state;
    return (
      <form>
        {this.renderInputs()}
        {this.currencyInput()}
        <label htmlFor="input-payment">
          Método de pagamento
          <select
            name="method"
            id="input-payment"
            onChange={ this.onChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select
            name="tag"
            id="input-tag"
            onChange={ this.onChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesLenght: state.wallet.expenses.length,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getAPIThunk()),
  addExpenses: (expenses) => dispatch(addExpensesThunk(expenses)),
});

Forms.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenses: PropTypes.func.isRequired,
  expensesLenght: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
