import React from 'react';
// import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import walletThunks from '../thunks/wallet';
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
      // isLoggedIn: true,
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    // this.checkLogged();
    getCurrencies();
  }

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
      total,
      currency,
      // isLoggedIn,
    } = this.state;
    // if (!isLoggedIn) {
    //   return <Redirect to="/" />;
    // }

    if (currencies.USDT) {
      delete currencies.USDT;
    }

    return (
      <section className="wallet-page">
        <WalletHeader email={ email } total={ total } currency={ currency } />
        <WalletForm
          currencies={ currencies }
          paymentMethods={ paymentMethods }
          categories={ categories }
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
  getCurrencies: () => dispatch(walletThunks.getCurrencies()),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    // expenses: PropTypes.shape({}),
  }),
  user: PropTypes.shape({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
