import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddCurrencies from '../components/AddCurrencies';
import { fetchAPI } from '../reducers/wallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
    };
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchApiThunk } = this.props;
    fetchApiThunk();
  }

  async totalExpenses() {
    const { userExpenses } = this.props;
    const expenses = userExpenses
      .map(((exp) => Number(exp.value)));
    const totalExpense = expenses.reduce(((exp1, exp2) => exp1 + exp2), 0);
    this.setState({ totalExpense });
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpense } = this.state;
    return (
      <main>
        <header className="header-wallet">
          <img src="https://www.abcdacomunicacao.com.br/wp-content/uploads/Trybe_logo-baixa.png" alt="trywallet logo" />
          <div className="user-info">
            <p data-testid="email-field">{ userEmail }</p>
            <p data-testid="total-field">{ `Despesa Total: ${totalExpense}` }</p>
          </div>
        </header>
        <main>
          <AddCurrencies totalEx={ this.totalExpenses } />
        </main>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiThunk: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
});

Wallet.propTypes = {
  fetchApiThunk: PropTypes.func,
  userEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
