import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addExpense, apiFetchThunk } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      descricao: '',
      moeda: '',
      metodoDePagamento: '',
      tag: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const { addCurrency, addExpenseProps, expenses } = this.props;
    addCurrency();
    const id = expenses.length;
    const infos = { ...this.state, id };
    addExpenseProps(infos);
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  render() {
    const { props: { currencies },
      state: { valor, descricao, moeda, metodoDePagamento, tag } } = this;
    const currencyName = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="valor" name="valor">
            Valor:
            <input type="text" id="valor" value={ valor } onChange={ this.handleChange } />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" value={ descricao } onChange={ this.handleChange } />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" value={ moeda } onChange={ this.handleChange }>
              {currencyName.map((currency) => (
                <option key={ currency } value={ currency }>
                  { currency }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo de pagamento">
            Método de pagamento
            <select id="metodo de pagamento" name="metodo de pagamento" value={ metodoDePagamento } onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="cartao de credito">Cartão de crédito</option>
              <option value="cartao de debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
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
