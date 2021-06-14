import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currencies from './Currencies';
import AddExpense from './AddExpense';
import { getExchangeRates } from '../services/getApi';
import { addExpenses } from '../actions';
import '../css/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.desc = this.desc.bind(this);
    this.val = this.val.bind(this);
    this.coin = this.coin.bind(this);
    this.method = this.method.bind(this);
    this.tag = this.tag.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.calculateId = this.calculateId.bind(this);
    this.clearState = this.clearState.bind(this);
    this.convertToBRL = this.convertToBRL.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();
    const ratesAPI = await getExchangeRates();
    this.calculateId();
    this.setState({ exchangeRates: ratesAPI });
    const { expense } = this.props;
    expense(this.state);
    const { value, currency, exchangeRates } = this.state;
    const convertedValue = this.convertToBRL(value, currency, exchangeRates);
    const totalField = document.getElementById('total-field');
    let total = parseFloat(totalField.innerHTML);
    total += convertedValue;
    totalField.innerHTML = total;
    this.clearState();
  }

  convertToBRL(value, currency, rates) {
    const filteredRate = Object.entries(rates).filter(
      ([key]) => key === currency,
    );
    return value * filteredRate[0][1].ask;
  }

  clearState() {
    this.setState({
      description: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  calculateId() {
    let { id } = this.state;
    id += 1;
    this.setState({ id });
  }

  desc(event) {
    this.setState({ description: event.target.value });
  }

  val(event) {
    this.setState({ value: event.target.value });
  }

  coin(event) {
    this.setState({ currency: event.target.value });
  }

  method(event) {
    this.setState({ method: event.target.value });
  }

  tag(event) {
    this.setState({ tag: event.target.value });
  }

  render() {
    const { description, value, currency, method, tag } = this.state;
    const n = 'number'; const v = 'value';
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="container">
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              value={ description }
              onChange={ this.desc }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="value">
            Valor
            <input type={ n } id={ v } name={ v } value={ value } onChange={ this.val } />
          </label>
        </div>
        <Currencies value={ currency } change={ this.coin } />
        <div className="container">
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment" value={ method } onChange={ this.method }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="container">
          <label htmlFor="tags">
            Tag
            <select id="tags" name="tags" value={ tag } onChange={ this.tag }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <AddExpense />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expense: (payload) => dispatch(addExpenses(payload)),
});

Form.propTypes = {
  expense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
