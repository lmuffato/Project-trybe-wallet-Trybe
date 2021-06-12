// Requisito 8 feito com auxilio do Rafael Medeiros, Lucas Lara, Murilo Gonsalves
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addExpense, fetchCoins } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.C = this.C.bind(this);
    this.getCurrencyRate = this.getCurrencyRate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getCurrencyRate() {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  async handleClick() {
    const { getCoins, addExpenseProps, expenses } = this.props;
    await getCoins();
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

  C({ target }) { // função handleChange renomeadas pra parar um erro de lint
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { props: { currencies },
      state: { value, description, currency, method, tag },
    } = this;
    const { USDT, ...rest } = currencies; // https://stackabuse.com/javascript-remove-a-property-from-an-object, link conseguido com a ajuda de : João Nascimento.
    const codeCoins = Object.keys(rest);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" value={ value } onChange={ this.C } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" value={ currency } onChange={ this.C }>
            {codeCoins.map((codeCoin) => (
              <option key={ codeCoin }>{codeCoin}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" value={ method } onChange={ this.C }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag } onChange={ this.C }>
            <option value="Alimentção">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" value={ description } onChange={ this.C } />
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoins()),
  addExpenseProps: (infos) => dispatch(addExpense(infos)),
});

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

Form.propTypes = {
  currencies: propTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
