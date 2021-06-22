import React from 'react';
// import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import walletThunks from '../thunks/wallet';

import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BRL',
      total: 0,
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
    this.reduceTotal();
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

    await addNewExpenseThunk(this.newExpense, this.reduceTotal);
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

  reduceTotal = () => {
    const { wallet } = this.props;
    const {
      expense: { currency },
    } = this.state;
    const total = wallet.expenses.reduce(
      (a, b) => a + b.value * wallet.exchangeRates[currency].ask,
      0,
    );
    this.setState({ total });
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

  render() {
    const {
      wallet: { currencies, expenses },
      user: { email },
    } = this.props;
    const {
      currency,
      selectValue,
      total,
      // isLoggedIn,
    } = this.state;
    // if (!isLoggedIn) {
    //   return <Redirect to="/" />;
    // }

    return (
      <section className="wallet-page">
        <WalletHeader email={ email } total={ total } currency={ currency } />
        <form className="wallet-inputs" id="wallet-form">
          <WalletForm
            currencies={ currencies }
            paymentMethods={ paymentMethods }
            categories={ categories }
            handleChange={ this.handleChange }
            selectValue={ selectValue }
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
        <WalletTable
          expenses={ expenses }
          reduceTotal={ this.reduceTotal }
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(walletThunks.getExchangeRates()),
  addNewExpenseThunk: (getExpense, sumTotal) => dispatch(walletThunks.addNewExpense(getExpense, sumTotal)),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    // expenses: PropTypes.shape({}),
  }),
  user: PropTypes.shape({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
