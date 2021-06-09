import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, sendExpenses } from '../actions';
import WalletHeader from '../components/walletHeader';
import WalletForm from '../components/walletForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  handleInput(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { sendExpense, wallet: { expenses } } = this.props;
    const state = { ...this.state };
    state.id = expenses.length;
    sendExpense(state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleTotal() {
    const { wallet: { expenses } } = this.props;
    return expenses.reduce((acumulator, element) => {
      const value = Number(element.value);
      const currence = Number(element.exchangeRates[element.currency].ask);
      const total = Number((value * currence).toFixed(2));
      return acumulator + total;
    }, 0);
  }

  render() {
    const { user: { email }, wallet: { currencies } } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <WalletHeader email={ email } total={ this.handleTotal() } currence="BRL" />
        <WalletForm
          currencies={ currencies }
          value={ value }
          description={ description }
          currence={ currency }
          method={ method }
          tag={ tag }
          onChange={ this.handleInput }
          onSubmit={ this.handleSubmit }
        />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(getCurrencies()),
  sendExpense: (obj) => dispatch(sendExpenses(obj)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  getApi: PropTypes.func.isRequired,
  sendExpense: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
