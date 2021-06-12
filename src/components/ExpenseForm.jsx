import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addExpense, apiFetchThunk } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.c = this.c.bind(this);
    this.getCurrencyRate = this.getCurrencyRate.bind(this);
  }

  getCurrencyRate() {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  async handleClick() {
    const { addCurrency, addExpenseProps, expenses } = this.props;
    await addCurrency();
    this.getCurrencyRate();
    const id = expenses.length;
    const infos = { ...this.state, id };
    addExpenseProps(infos);
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  c({ target }) { /* ae, na moral esse lint!!! essa função aqui é a HandleChange... mas depois de 5 horas fazendo só esse requisito e eu não conseguir dar push por causa de 1 caractere, foi tenso... */
    this.setState({ [target.id]: target.value });
  }

  render() {
    const { props: { currencies },
      state: { value, description, currency, method, tag } } = this;
    const currencyName = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <form>
        <label htmlFor="value" name="value">
          Valor:
          <input type="text" id="value" value={ value } onChange={ this.c } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" value={ description } onChange={ this.c } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.c }>
            {currencyName.map((currencyy) => (
              <option key={ currencyy } value={ currencyy }>
                { currencyy }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" value={ method } onChange={ this.c }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.c }>
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

const mapDispatchToProps = (dispatch) => ({
  addCurrency: () => dispatch(apiFetchThunk()),
  addExpenseProps: (infos) => dispatch(addExpense(infos)),
});

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,

});

ExpenseForm.propTypes = {
  currencies: propTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
