import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoins from '../actions/addCurrencies';
import fetchPrices from '../actions/addExpense';
import Table from '../components/Table';
import Header from '../components/Header';
import FormsInput from '../components/FormsInput';
import FormsSelect from '../components/FormsSelect';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { expenses, fetchExpenses } = this.props;
    const id = expenses.length;
    const newState = { ...this.state, id };
    fetchExpenses(newState);
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <FormsInput onChange={ this.handleChanges } />
        <FormsSelect
          onChange={ this.handleChanges }
          currencies={ currencies }
          onClick={ this.handleClick }
        />
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCoins()),
  fetchExpenses: (expense) => dispatch(fetchPrices(expense)),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
