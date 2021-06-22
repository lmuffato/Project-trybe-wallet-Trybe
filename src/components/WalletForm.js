import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import WalletInput from './WalletInput';
import walletThunks from '../thunks/wallet';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        id: 0,
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
        exchangeRates: {},
      },
      selectValue: 'Selecione...',
      // isLoggedIn: true,
    };
  }

  componentDidMount() {
    const { getExchangeRates } = this.props;
    // this.checkLogged();
    getExchangeRates();
  }

  // componentDidUpdate() {
  // }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ expense }) => ({
      expense: {
        ...expense,
        [name]: value,
      },
    }));
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { addNewExpenseThunk } = this.props;

    await addNewExpenseThunk(this.newExpense);
    this.setState((prev) => ({
      expense: { ...prev.expense, id: prev.expense.id + 1 },
    }));
  };

  newExpense = () => {
    const { wallet } = this.props;
    const { expense } = this.state;
    if (!this.checkEmptyInput(expense)) {
      return {
        ...expense,
        exchangeRates: wallet.exchangeRates,
      };
    }
    alert('Preencha todos os campos.');
  };

  checkEmptyInput = (inputs) => !!Object.values(inputs)
    .filter((value) => value === '').length;

  // checkLogged = () => {
  //   const { user } = store.getState();
  //   if (user.email === '') {
  //     // alert('Usuário não logado!');
  //     this.setState({ isLoggedIn: false });
  //   }
  // };

  renderSelects = () => {
    const {
      wallet: { currencies },
    } = this.props;
    const {
      selectValue,
      // isLoggedIn,
    } = this.state;
    return (
      <>
        <Select
          options={ currencies }
          title="code"
          id="currency"
          htmlFor="currency"
          label="Moeda"
          name="moeda"
          handleChange={ this.handleChange }
          value={ selectValue }
        />
        <Select
          options={ paymentMethods }
          id="method"
          htmlFor="method"
          label="Método de pagamento"
          handleChange={ this.handleChange }
          value={ selectValue }
        />
        <Select
          options={ categories }
          id="tag"
          htmlFor="tag"
          label="Tag"
          handleChange={ this.handleChange }
          value={ selectValue }
        />
      </>
    );
  };

  render() {
    return (
      <form className="wallet-inputs" id="wallet-form">
        <WalletInput
          htmlFor="value"
          label="Valor"
          type="number"
          id="value"
          handleChange={ this.handleChange }
        />
        {this.renderSelects()}
        <WalletInput
          label="Descrição"
          htmlFor="description"
          type="text"
          id="description"
          handleChange={ this.handleChange }
        />
        <button
          form="wallet-inputs"
          type="button"
          className="btn btn-primary"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});
const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(walletThunks.getExchangeRates()),
  addNewExpenseThunk: (getExpense, sumTotal) => dispatch(walletThunks
    .addNewExpense(getExpense, sumTotal)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  paymentMethods: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
