import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import { getCurrencies as getCurrenciesThunk } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.renderCurrencies = this.renderCurrencies.bind(this);
    this.renderTags = this.renderTags.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      payment: 'money',
      tag: 'food',
      //exchangeRates: {},
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    //const value = target.type === 'select-one' ? target.value : target.value;
    /* console.log(target.type);
    console.log(target.value); */
    console.log(this.state);
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  renderCurrencies() {
    const { currencies } = this.props;
    return (
      <select name="currency" id="currency" onChange={ (e) => this.handleChange(e) }>
        {currencies.map((currency, index) => (
          <option
            key={ index }
            value={ currency }
          >
            {currency}
          </option>
        ))}
      </select>
    );
  }

  renderTags() {
    const { tag } = this.state;

    return (
      <select name="tag" value={ tag } id="tag" onChange={ (e) => this.handleChange(e) }>
        <option value="food">Alimentação</option>
        <option value="leisure">Lazer</option>
        <option value="work">Trabalho</option>
        <option value="transport">Transporte</option>
        <option value="health">Saúde</option>
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
              type="text"
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
          <label htmlFor="payment">
            Método de pagamento:
            <select name="payment" id="payment" onChange={ (e) => this.handleChange(e) }>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
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

/* Form.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
}; */

export default connect(mapStateToProps, mapDispatchToProps)(Form);
