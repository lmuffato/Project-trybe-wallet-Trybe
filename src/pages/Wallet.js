import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoinCodes, addExpenseAction } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Lazer',
      total: 0,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handlerAddExpense = this.handlerAddExpense.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }

  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  handleOnChange({ target }) {
    const { value, name } = target;
    this.setState(({
      [name]: value,
    }));
  }

  async handlerAddExpense() {
    const { id, value, description, currency, method, tag } = this.state;
    const { addExpense } = this.props;
    this.setState({
      id: id + 1,
    });

    await addExpense({
      id,
      value,
      currency,
      description,
      method,
      tag,
    });
    this.updateTotal();
  }

  updateTotal() {
    const { updateTotal } = this.props;
    let soma = 0;
    return updateTotal.map((expense) => {
      const { currency, exchangeRates, value } = expense;
      const coinAsk = Object.entries(exchangeRates).find((x) => x[0] === currency)[1].ask;
      soma += coinAsk * value;
      const total = 'total';
      return this.setState({
        [total]: soma,
      });
    });
  }

  render() {
    const { userEmail, currency } = this.props;
    const { value, description, coins, method, tag, total } = this.state;

    return (
      <div>
        <Header userEmail={ userEmail } total={ total } />
        <Form
          value={ value }
          description={ description }
          currency={ coins }
          method={ method }
          tag={ tag }
          coins={ currency }
          onChange={ this.handleOnChange }
          handlerAddExpense={ this.handlerAddExpense }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currency: state.wallet.currencies,
  updateTotal: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchCoinCodes()),
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

Wallet.propTypes = {
  userEmail: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  fetchCoin: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
  updateTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
