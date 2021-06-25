import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import { addExpense } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { stateID } = this.props;

    this.state = {
      id: stateID,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.filterCurrencies = this.filterCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { id } = this.state;
    const { dispatchExpense } = this.props;
    this.fetchCurrencies();
    dispatchExpense(this.state);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    });
  }

  async fetchCurrencies() {
    const currAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await currAPI.json();
    this.setState({
      exchangeRates: response,
    });
  }

  filterCurrencies() {
    const { exchangeRates } = this.state;
    const currencies = Object.keys(exchangeRates);
    const filteredCurrencies = currencies.filter((currency) => currency !== 'USDT');
    return filteredCurrencies;
  }

  render() {
    return (
      <>
        <Header />
        <ExpensesForm
          currencies={ this.filterCurrencies() }
          handler={ this.handleChange }
          submitExpense={ this.handleClick }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  stateID: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (expenseData) => dispatch(addExpense(expenseData)),
});

Wallet.propTypes = {
  stateID: PropTypes.number.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
