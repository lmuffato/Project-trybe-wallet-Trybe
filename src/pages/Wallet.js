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
      description: '',
      coin: 'USD',
      paymentType: 'money',
      tag: 'leisure',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handlerAddExpense = this.handlerAddExpense.bind(this);
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

  handlerAddExpense() {
    const { id, value, description, coin, paymentType, tag } = this.state;
    const { addExpense } = this.props;
    this.setState({
      id: id + 1,
    });

    addExpense({
      id,
      value,
      description,
      coin,
      paymentType,
      tag,
    });
  }

  render() {
    const { userEmail, coins } = this.props;
    const { value, description, coin, paymentType, tag } = this.state;
    return (
      <div>
        <Header userEmail={ userEmail } />
        <Form
          value={ value }
          description={ description }
          coin={ coin }
          paymentType={ paymentType }
          tag={ tag }
          coins={ coins }
          onChange={ this.handleOnChange }
          handlerAddExpense={ this.handlerAddExpense }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchCoinCodes()),
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

Wallet.propTypes = {
  userEmail: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  fetchCoin: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
