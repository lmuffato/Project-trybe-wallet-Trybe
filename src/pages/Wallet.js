import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { fetchCurrencies, fetchExchageRates } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.dispatchExpense = this.dispatchExpense.bind(this);

    this.state = {
      cost: {
        currency: 'USD',
        description: '',
        method: '',
        tag: '',
        value: 0,
        id: 0,
      },
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState((old) => ({
      cost: { ...old.cost, [name]: value },
    }));
  }

  dispatchExpense() {
    const { expense } = this.props;
    const { cost: { value }, cost } = this.state;
    expense(cost, value);
    this.setState((old) => ({
      cost: {
        currency: 'USD',
        description: '',
        method: '',
        tag: '',
        value: '',
        id: old.cost.id + 1,
      },
    }));
  }

  render() {
    const { email, currencies, total } = this.props;
    const { cost } = this.state;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">{total ? Number(total) : 0}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form
          currencies={ currencies }
          value={ cost }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => this.dispatchExpense() }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  expense: (state, price) => dispatch(fetchExchageRates(state, price)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
