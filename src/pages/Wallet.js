import React from 'react';
// import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import walletThunks from '../thunks/wallet';
import { addExpense } from '../actions';

import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
      expense: {
        value: '',
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ expense }) => ({
      expense: {
        ...expense,
        [name]: value,
      },
    }));
  };

  handleClick = (e) => {
    e.preventDefault();
    const { getExchangeRates, add, wallet } = this.props;
    let id = 0;
    if (wallet.expenses[wallet.expenses.length - 1]) {
      id = wallet.expenses[wallet.expenses.length - 1].id + 1;
    }
    getExchangeRates();
    this.setState(
      ({ expense }) => ({
        expense: {
          ...expense,
          exchangeRates: wallet.exchangeRates,
        },
      }),
      () => {
        const {
          expense,
          expense: { value, currency },
        } = this.state;
        if (!this.checkEmptyInput(expense)) {
          add({
            id,
            ...expense,
          });
          this.setState(({ total }) => ({
            total: total + value * wallet.exchangeRates[currency].ask,
          }));
        } else {
          alert('Preencha todos os campos.');
        }
      },
    );
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
      wallet: { currencies },
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
  add: (expense) => dispatch(addExpense(expense)),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    // expenses: PropTypes.shape({}),
  }),
  user: PropTypes.shape({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
