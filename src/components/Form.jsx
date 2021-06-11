import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newExpense } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { stateId } = this.props;
    this.state = {
      id: stateId,
      value: 0,
      description: '-',
      currency: 'USD',
      method: '-',
      tag: '-',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await fetchAPI.json();
    this.setState({ exchangeRates });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  valueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          name="value"
          value={ value }
          type="number"
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  descriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          name="description"
          value={ description }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  currencySelect() {
    const { currency, exchangeRates } = this.state;
    const currencies = Object.keys(exchangeRates);
    const filterCur = currencies.filter((curency) => curency !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ (event) => this.handleChange(event) }
        >
          {filterCur.map((cur) => <option key={ cur } value={ cur }>{cur}</option>)}
        </select>
      </label>
    );
  }

  methodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          type="select"
          id="method"
          value={ method }
          name="method"
          onChange={ (event) => this.handleChange(event) }
        >
          <option value="">Selecione</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagSelect() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          type="select"
          id="tag"
          value={ tag }
          name="tag"
          onChange={ (event) => this.handleChange(event) }
        >
          <option value="">Selecione</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  handleClick() {
    const { id } = this.state;
    const { expenseDispatch } = this.props;
    expenseDispatch(this.state);
    this.setState(
      {
        id: id + 1,
        value: 0,
        description: '-',
        currency: 'USD',
        method: '-',
        tag: '-',
        exchangeRates: {},
      },
    );
    this.getCurrencies();
  }

  render() {
    return (
      <form className="form-wallet">
        {this.valueInput()}
        {this.descriptionInput()}
        {this.currencySelect()}
        {this.methodSelect()}
        {this.tagSelect()}
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  stateId: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  stateId: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDispatch: (payload) => dispatch(newExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
