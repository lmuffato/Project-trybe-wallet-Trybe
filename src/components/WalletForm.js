import React, { Component } from 'react';
import { func, objectOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions/index';
import Category from './WalletFormOptions/Category';
import PayOption from './WalletFormOptions/PayOption';
import Currency from './WalletFormOptions/Currency';
import Description from './WalletFormOptions/Description';
import Value from './WalletFormOptions/Value';

class WalletForm extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      payoption: 'money',
      category: 'food',
    };
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { value, description, currency, payoption, category } = this.state;
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, payoption, category } = this.state;
    const currenciesKeys = Object.keys(currencies).filter((key) => key !== 'USDT');
    return (
      <form onSubmit={ this.handleSubmit }>
        <Value value={ value } handleInput={ this.handleInput } />
        <Description description={ description } handleInput={ this.handleInput } />
        <Currency
          currencies={ currenciesKeys }
          selectedCur={ currency }
          handleInput={ this.handleInput }
        />
        <PayOption payoption={ payoption } handleInput={ this.handleInput } />
        <Category category={ category } handleInput={ this.handleInput } />
        <button
          type="submit"
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesThunk()),
});

WalletForm.propTypes = {
  setCurrencies: func,
  currencies: objectOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
